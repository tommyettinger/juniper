package com.github.tommyettinger.random.experimental;

import com.badlogic.gdx.Files;
import com.badlogic.gdx.files.FileHandle;
import com.badlogic.gdx.utils.GdxRuntimeException;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.random.cipher.SpeckCipher;

import java.io.*;

/**
 * A basic way to encrypt a {@link FileHandle} using {@link SpeckCipher}. The supported operations are mostly limited to
 * reading or writing byte arrays, which this always keeps in memory as unencrypted bytes and writes to disk as
 * encrypted bytes. {@link #write(boolean)} and {@link #write(InputStream, boolean)} are not supported. The operations
 * this class supports are sufficient to read and write {@link com.badlogic.gdx.graphics.Pixmap} and
 * {@link com.badlogic.gdx.graphics.Texture} objects with encryption. You can also use
 * {@link #writeString(String, boolean, String)} and {@link #readString(String)} to read and write Strings, but you must
 * be careful to avoid version control (such as Git) changing line endings in encrypted text files. For those, using a
 * file extension like {@code .dat} is a good idea to avoid your data being sometime changed irreversibly.
 * <br>
 * This uses four {@code long} items as its key, and additionally generates one long nonce from the key and the relative
 * path of the given FileHandle. Don't expect much meaningful security out of this, but this is enough to prevent the
 * average user from just opening up a JAR to look at all the images or read the whole script. Someone determined enough
 * could use a Java agent to replace the writing part of this class with part that writes unencrypted, or just browse
 * the unencrypted data in-memory, so this is very far from bulletproof.
 * <br>
 * Based off <a href="https://gist.github.com/MobiDevelop/6389767">a gist by MobiDevelop</a>.
 */
public class SpeckEncryptedFileHandle extends FileHandle {

	private final FileHandle file;
	private final long k1, k2, k3, k4, n0;

	public SpeckEncryptedFileHandle(FileHandle file, long k1, long k2, long k3, long k4) {
		this.file = file;
		this.k1 = k1;
		this.k2 = k2;
		this.k3 = k3;
		this.k4 = k4;
		n0 = k1 + k2 ^ k3 - (k4 ^ Hasher.hash64(k1 ^ k2 ^ k3 ^ k4, file.path()));
	}

	public int readBytes(byte[] bytes, int offset, int size) {
		int ret = file.readBytes(bytes, offset, size);
		SpeckCipher.decryptInPlaceCTR(k1, k2, k3, k4, n0, bytes, offset, size);
		return ret;
	}

	@Override
	public byte[] readBytes() {
		byte[] bytes = file.readBytes();
		return SpeckCipher.decryptInPlaceCTR(k1, k2, k3, k4, n0, bytes, 0, bytes.length);
	}

	public InputStream read() {
		try (InputStream is = new ByteArrayInputStream(readBytes())) {
			return is;
		} catch (IOException ex) {
			throw new GdxRuntimeException(ex);
		}
	}

	@Override
	public OutputStream write(boolean append) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle cannot be used to obtain an OutputStream.");
//		if (file.type() == Files.FileType.Classpath) throw new GdxRuntimeException("Cannot write to a classpath file: " + file.file());
//		if (file.type() == Files.FileType.Internal) throw new GdxRuntimeException("Cannot write to an internal file: " + file.file());
//		file.parent().mkdirs();
//		try {
//			return new FileOutputStream(file.file(), append);
//		} catch (Exception ex) {
//			if (file.file().isDirectory())
//				throw new GdxRuntimeException("Cannot open a stream to a directory: " + file.file() + " (" + file.type() + ")", ex);
//			throw new GdxRuntimeException("Error writing file: " + file.file() + " (" + file.type() + ")", ex);
//		}
	}

	@Override
	public void write(InputStream input, boolean append) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle cannot be used to emit an InputStream.");
	}

	@Override
	public void writeBytes(byte[] bytes, boolean append) {
		file.writeBytes(SpeckCipher.encryptInPlaceCTR(k1, k2, k3, k4, n0, bytes, 0, bytes.length), append);
	}

	@Override
	public void writeBytes(byte[] bytes, int offset, int length, boolean append) {
		file.writeBytes(SpeckCipher.encryptInPlaceCTR(k1, k2, k3, k4, n0, bytes, offset, length), offset, length, append);
	}

	@Override
	public FileHandle child(String name) {
		return new SpeckEncryptedFileHandle(file.child(name), k1, k2, k3, k4);
	}

	@Override
	public FileHandle sibling(String name) {
		return new SpeckEncryptedFileHandle(file.sibling(name), k1, k2, k3, k4);
	}

	@Override
	public FileHandle parent() {
		return new SpeckEncryptedFileHandle(file.parent(), k1, k2, k3, k4);
	}


	@Override
	public String path() {
		return file.path();
	}

	@Override
	public String name() {
		return file.name();
	}

	@Override
	public String extension() {
		return file.extension();
	}

	@Override
	public String nameWithoutExtension() {
		return file.nameWithoutExtension();
	}

	@Override
	public String pathWithoutExtension() {
		return file.pathWithoutExtension();
	}

	@Override
	public Files.FileType type() {
		return file.type();
	}

	@Override
	public File file() {
		return file.file();
	}

	@Override
	public BufferedInputStream read(int bufferSize) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.read(int) is unsupported.");
	}

	@Override
	public Reader reader() {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.reader() is unsupported.");
	}

	@Override
	public Reader reader(String charset) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.reader(String) is unsupported.");
	}

	@Override
	public BufferedReader reader(int bufferSize) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.reader(int) is unsupported.");
	}

	@Override
	public BufferedReader reader(int bufferSize, String charset) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.reader(int, String) is unsupported.");
	}

	@Override
	public String readString() {
        return new String(readBytes());
    }

	@Override
	public String readString(String charset) {
        try {
            return new String(readBytes(), charset);
        } catch (UnsupportedEncodingException e) {
            throw new GdxRuntimeException("Error (incorrect encoding) reading file " + file);
        }
    }

	@Override
	public Writer writer(boolean append) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.writer(boolean) is unsupported.");
	}

	@Override
	public Writer writer(boolean append, String charset) {
		throw new UnsupportedOperationException("SpeckEncryptedFileHandle.writer(boolean, String) is unsupported.");
	}

	@Override
	public void writeString(String string, boolean append) {
		writeBytes(string.getBytes(), append);
	}

	@Override
	public void writeString(String string, boolean append, String charset) {
        try {
            writeBytes(string.getBytes(charset), append);
        } catch (UnsupportedEncodingException e) {
			throw new GdxRuntimeException("Error (incorrect encoding) writing file " + file);
        }
    }

	@Override
	public FileHandle[] list() {
		return file.list();
	}

	@Override
	public FileHandle[] list(String suffix) {
		return file.list(suffix);
	}

	@Override
	public boolean isDirectory() {
		return file.isDirectory();
	}

	@Override
	public void mkdirs() {
		file.mkdirs();
	}

	@Override
	public boolean exists() {
		return file.exists();
	}

	@Override
	public boolean delete() {
		return file.delete();
	}

	@Override
	public boolean deleteDirectory() {
		return file.deleteDirectory();
	}

	@Override
	public void emptyDirectory() {
		file.emptyDirectory();
	}

	@Override
	public void emptyDirectory(boolean preserveTree) {
		file.emptyDirectory(preserveTree);
	}

	@Override
	public void copyTo(FileHandle dest) {
		file.copyTo(dest);
	}

	@Override
	public void moveTo(FileHandle dest) {
		file.moveTo(dest);
	}

	@Override
	public long length() {
		return file.length();
	}

	@Override
	public long lastModified() {
		return file.lastModified();
	}

	@Override
	public String toString() {
		return file.toString();
	}
}