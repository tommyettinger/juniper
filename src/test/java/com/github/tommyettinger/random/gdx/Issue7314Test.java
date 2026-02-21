/*
 * Copyright (c) 2024 See AUTHORS file.
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
 *
 */

package com.github.tommyettinger.random.gdx;

import com.badlogic.gdx.utils.ObjectMap;
import com.github.tommyettinger.ds.ObjectObjectMap;
import org.junit.Test;

import java.util.ConcurrentModificationException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * <a href="https://github.com/libgdx/libgdx/issues/7314">Issue 7314</a>.
 */
public class Issue7314Test {
	@Test
	public void testGdx() {
		ObjectMap<String, Integer> map = new ObjectMap<>();
		map.put("1", 1);
		map.put("2", 2);
		map.put("3", 3);
		map.put("4", 4);
		map.put("5", 5);
		map.put("6", 6);
		map.put("7", 7);
		map.put("8", 8);
		map.put("9", 9);
		map.put("10", 10);
		map.put("11", 11);
		map.put("12", 12);
		map.put("13", 13);
		map.put("14", 14);
		map.put("15", 15);
		map.put("16", 16);
		map.put("17", 17);
		map.put("18", 18);
		map.put("19", 19);
		map.put("20", 20); // < -- bug happens starting from 20 elements !? Not with 19 elements or below.
		map.put("21", 21);
		map.put("22", 22);
		map.put("23", 23);
		map.put("24", 24);
		map.put("25", 25);
		map.put("26", 26);
		map.put("27", 27);
		map.put("28", 28);
		map.put("29", 29);

		// remove all
		for (Integer value : map.values()) {
			System.out.println(value);
			map.remove(String.valueOf(value));
		}

		System.out.println("size = " + map.size);
	}

	@Test
	public void testJdkgdxds() {
		ObjectObjectMap<String, Integer> map = new ObjectObjectMap<>();
		map.put("1", 1);
		map.put("2", 2);
		map.put("3", 3);
		map.put("4", 4);
		map.put("5", 5);
		map.put("6", 6);
		map.put("7", 7);
		map.put("8", 8);
		map.put("9", 9);
		map.put("10", 10);
		map.put("11", 11);
		map.put("12", 12);
		map.put("13", 13);
		map.put("14", 14);
		map.put("15", 15);
		map.put("16", 16);
		map.put("17", 17);
		map.put("18", 18);
		map.put("19", 19);
		map.put("20", 20);
		map.put("21", 21);
		map.put("22", 22);
		map.put("23", 23);
		map.put("24", 24);
		map.put("25", 25);
		map.put("26", 26);
		map.put("27", 27);
		map.put("28", 28);
		map.put("29", 29);

		// remove all
		for (Integer value : map.values()) {
			System.out.println(value);
			map.remove(String.valueOf(value));
		}

		System.out.println("size = " + map.size());
	}

	/**
	 * This will certainly fail with a ConcurrentModificationException.
	 */
	@Test(expected = ConcurrentModificationException.class)
	public void testJdk() {
		HashMap<String, Integer> map = new HashMap<>();
		map.put("1", 1);
		map.put("2", 2);
		map.put("3", 3);
		map.put("4", 4);
		map.put("5", 5);
		map.put("6", 6);
		map.put("7", 7);
		map.put("8", 8);
		map.put("9", 9);
		map.put("10", 10);
		map.put("11", 11);
		map.put("12", 12);
		map.put("13", 13);
		map.put("14", 14);
		map.put("15", 15);
		map.put("16", 16);
		map.put("17", 17);
		map.put("18", 18);
		map.put("19", 19);
		map.put("20", 20);
		map.put("21", 21);
		map.put("22", 22);
		map.put("23", 23);
		map.put("24", 24);
		map.put("25", 25);
		map.put("26", 26);
		map.put("27", 27);
		map.put("28", 28);
		map.put("29", 29);

		// remove all
		for (Integer value : map.values()) {
			System.out.println(value);
			map.remove(String.valueOf(value));
		}

		System.out.println("size = " + map.size());
	}

	@Test
	public void testGdxIterator() {
		ObjectMap<String, Integer> map = new ObjectMap<>();
		map.put("1", 1);
		map.put("2", 2);
		map.put("3", 3);
		map.put("4", 4);
		map.put("5", 5);
		map.put("6", 6);
		map.put("7", 7);
		map.put("8", 8);
		map.put("9", 9);
		map.put("10", 10);
		map.put("11", 11);
		map.put("12", 12);
		map.put("13", 13);
		map.put("14", 14);
		map.put("15", 15);
		map.put("16", 16);
		map.put("17", 17);
		map.put("18", 18);
		map.put("19", 19);
		map.put("20", 20); // < -- bug happens starting from 20 elements !? Not with 19 elements or below.
		map.put("21", 21);
		map.put("22", 22);
		map.put("23", 23);
		map.put("24", 24);
		map.put("25", 25);
		map.put("26", 26);
		map.put("27", 27);
		map.put("28", 28);
		map.put("29", 29);

		ObjectMap.Entries<String, Integer> entries = map.entries();
		// remove all
		for (ObjectMap.Entry<String, Integer> e; entries.hasNext(); ) {
			e = entries.next();
			System.out.println(e.value);
			entries.remove();
		}

		System.out.println("size = " + map.size);
	}

	@Test
	public void testJdkgdxdsIterator() {
		ObjectObjectMap<String, Integer> map = new ObjectObjectMap<>();
		map.put("1", 1);
		map.put("2", 2);
		map.put("3", 3);
		map.put("4", 4);
		map.put("5", 5);
		map.put("6", 6);
		map.put("7", 7);
		map.put("8", 8);
		map.put("9", 9);
		map.put("10", 10);
		map.put("11", 11);
		map.put("12", 12);
		map.put("13", 13);
		map.put("14", 14);
		map.put("15", 15);
		map.put("16", 16);
		map.put("17", 17);
		map.put("18", 18);
		map.put("19", 19);
		map.put("20", 20);
		map.put("21", 21);
		map.put("22", 22);
		map.put("23", 23);
		map.put("24", 24);
		map.put("25", 25);
		map.put("26", 26);
		map.put("27", 27);
		map.put("28", 28);
		map.put("29", 29);

		ObjectObjectMap.MapIterator<String, Integer, Map.Entry<String, Integer>> entries = map.iterator();
		// remove all
		for (Map.Entry<String, Integer> e; entries.hasNext(); ) {
			e = entries.next();
			System.out.println(e.getValue());
			entries.remove();
		}

		System.out.println("size = " + map.size());
	}

	/**
	 * This will certainly fail with a ConcurrentModificationException.
	 */
	@Test //(expected = ConcurrentModificationException.class)
	public void testJdkIterator() {
		HashMap<String, Integer> map = new HashMap<>();
		map.put("1", 1);
		map.put("2", 2);
		map.put("3", 3);
		map.put("4", 4);
		map.put("5", 5);
		map.put("6", 6);
		map.put("7", 7);
		map.put("8", 8);
		map.put("9", 9);
		map.put("10", 10);
		map.put("11", 11);
		map.put("12", 12);
		map.put("13", 13);
		map.put("14", 14);
		map.put("15", 15);
		map.put("16", 16);
		map.put("17", 17);
		map.put("18", 18);
		map.put("19", 19);
		map.put("20", 20);
		map.put("21", 21);
		map.put("22", 22);
		map.put("23", 23);
		map.put("24", 24);
		map.put("25", 25);
		map.put("26", 26);
		map.put("27", 27);
		map.put("28", 28);
		map.put("29", 29);

		Iterator<Map.Entry<String, Integer>> entries = map.entrySet().iterator();
		// remove all
		for (Map.Entry<String, Integer> e; entries.hasNext(); ) {
			e = entries.next();
			System.out.println(e.getValue());
			entries.remove();
		}

		System.out.println("size = " + map.size());
	}
}
