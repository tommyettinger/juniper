/*******************************************************************************
 * Copyright 2011 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

package com.github.tommyettinger.teavm;

import com.badlogic.gdx.utils.Clipboard;
import org.teavm.jso.JSBody;

/**
 * Basic implementation of clipboard in GWT.
 * Can copy if given permission.
 * If the clipboard tries to read in pasted text, it gets it from the URL, after any {@code #} .
 */
public class ReadWriteClipboard implements Clipboard {
	public ReadWriteClipboard() {
	}

    @JSBody(script = "return window.location.search.length > 1;")
	public static native boolean hasContentsNATIVE ();
	public boolean hasContents (){
        return hasContentsNATIVE();
    }

    @JSBody(script = "return decodeURIComponent(window.location.search.substr(1));")
	public static native String getContentsNATIVE ();

    @Override
    public String getContents (){
        return getContentsNATIVE();
    }

	@Override
	public void setContents (String content) {
		setContentsNATIVE(content);
	}

    @JSBody(params = { "content" }, script = "window.location.search = content;")
	private static native void setContentsNATIVE(String content);
}
