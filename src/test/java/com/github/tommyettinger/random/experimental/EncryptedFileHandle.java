package com.github.tommyettinger.random.experimental;

import java.io.*;

import com.badlogic.gdx.Files;
import com.badlogic.gdx.files.FileHandle;
import com.badlogic.gdx.utils.GdxRuntimeException;
import com.github.tommyettinger.digital.Hasher;
import com.github.tommyettinger.random.cipher.SpeckCipher;

/**
 * Based off <a href="https://gist.github.com/MobiDevelop/6389767">a gist by MobiDevelop</a>.
 */
public class EncryptedFileHandle extends FileHandle {

	private final FileHandle file;
	private final long k1, k2, k3, k4, n0;

	public EncryptedFileHandle(FileHandle file, long k1, long k2, long k3, long k4) {
		this.file = file;
		this.k1 = k1;
		this.k2 = k2;
		this.k3 = k3;
		this.k4 = k4;
		n0 = Hasher.hash64(k1 ^ k2 ^ k3 ^ k4, file.path());
	}

	public int readBytes(byte[] bytes, int offset, int size) {
		int ret = file.readBytes(bytes, offset, size);
		SpeckCipher.decryptInPlaceCTR(k1, k2, k3, k4, n0, bytes, offset, size);
		return ret;
	}

	@Override
	public byte[] readBytes() {
		byte[] bytes = file.readBytes();
		SpeckCipher.decryptInPlaceCTR(k1, k2, k3, k4, n0, bytes, 0, bytes.length);
		return bytes;
	}

	public InputStream read() {
		try (InputStream is = file.read()) {
			return new InputStream() {
				//TODO: Implement decryption here
				@Override
				public int read() throws IOException {
					return is.read();
				}
			};
		} catch (IOException ex) {
			throw new GdxRuntimeException(ex);
		}
	}

	@Override
	public OutputStream write(boolean append) {
		//TODO: Implement encryption here
		return file.write(append);
	}

	@Override
	public void write(InputStream input, boolean append) {
		//TODO: Implement encryption here
		file.write(input, append);
	}

	@Override
	public void writeBytes(byte[] bytes, boolean append) {
		//TODO: Implement encryption here
		file.writeBytes(bytes, append);
	}

	@Override
	public void writeBytes(byte[] bytes, int offset, int length, boolean append) {
		//TODO: Implement encryption here
		file.writeBytes(bytes, offset, length, append);
	}

	@Override
	public FileHandle child(String name) {
		return new EncryptedFileHandle(file.child(name), k1, k2, k3, k4);
	}

	@Override
	public FileHandle sibling(String name) {
		return new EncryptedFileHandle(file.sibling(name), k1, k2, k3, k4);
	}

	@Override
	public FileHandle parent() {
		return new EncryptedFileHandle(file.parent(), k1, k2, k3, k4);
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
		return file.read(bufferSize);
	}

	@Override
	public Reader reader() {
		return file.reader();
	}

	@Override
	public Reader reader(String charset) {
		return file.reader(charset);
	}

	@Override
	public BufferedReader reader(int bufferSize) {
		return file.reader(bufferSize);
	}

	@Override
	public BufferedReader reader(int bufferSize, String charset) {
		return file.reader(bufferSize, charset);
	}

	@Override
	public String readString() {
		return file.readString();
	}

	@Override
	public String readString(String charset) {
		return file.readString(charset);
	}

	@Override
	public Writer writer(boolean append) {
		return file.writer(append);
	}

	@Override
	public Writer writer(boolean append, String charset) {
		return file.writer(append, charset);
	}

	@Override
	public void writeString(String string, boolean append) {
		file.writeString(string, append);
	}

	@Override
	public void writeString(String string, boolean append, String charset) {
		file.writeString(string, append, charset);
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