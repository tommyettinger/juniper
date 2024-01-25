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

import com.badlogic.gdx.utils.IntIntMap;
import com.badlogic.gdx.utils.ObjectMap;
import com.github.tommyettinger.ds.ObjectObjectMap;
import org.junit.Assert;
import org.junit.Test;

import java.util.ConcurrentModificationException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Trying to replicate an issue with IntMap, or IntIntMap, with libGDX.
 */
public class IntMapIssueTest {
	@Test
	public void testGdx() {
		IntIntMap map = new IntIntMap(24, 0.8f);
		//655304458, 655238926, 655501067, 655369995, 655304463, 655238923, 655501064, 655369998, 655369992, 655238920, 655238928, 655435529, 655304457, 655304465, 655501066, 655369994, 655304462, 655238922, 655435531, 655369999, 655304459, 655238927, 655370000, 655435528, 655304464, 655304456, 655501065, 655238929, 655369993, 655238921, 655370001, 655435530
		map.put(655238920, 655238920);
		map.put(655238921, 655238921);
		map.put(655238922, 655238922);
		map.put(655238923, 655238923);
		map.put(655238926, 655238926);
		map.put(655238927, 655238927);
		map.put(655238928, 655238928);
		map.put(655238929, 655238929);
		map.put(655304456, 655304456);
		map.put(655304457, 655304457);
		map.put(655304458, 655304458);
		map.put(655304459, 655304459);
		map.put(655304462, 655304462);
		map.put(655304463, 655304463);
		map.put(655304464, 655304464);
		map.put(655304465, 655304465);
		map.put(655369992, 655369992);
		map.put(655369993, 655369993);
		map.put(655369994, 655369994);
		map.put(655369995, 655369995);
		map.put(655369998, 655369998);
		map.put(655369999, 655369999);
		map.put(655370000, 655370000);
		map.put(655370001, 655370001);
		map.put(655435528, 655435528);
		map.put(655435529, 655435529);
		map.put(655435530, 655435530);
		map.put(655435531, 655435531);
		map.put(655501064, 655501064);
		map.put(655501065, 655501065);
		map.put(655501066, 655501066);
		map.put(655501067, 655501067);
		// not in the original
		map.put(655501068, 655501068);

		System.out.println("size = " + map.size);
		Assert.assertEquals(33, map.size);
	}

	@Test
	public void testJdkgdxds() {
		com.github.tommyettinger.ds.IntIntMap map = new com.github.tommyettinger.ds.IntIntMap(24, 0.8f);

		map.put(655238920, 655238920);
		map.put(655238921, 655238921);
		map.put(655238922, 655238922);
		map.put(655238923, 655238923);
		map.put(655238926, 655238926);
		map.put(655238927, 655238927);
		map.put(655238928, 655238928);
		map.put(655238929, 655238929);
		map.put(655304456, 655304456);
		map.put(655304457, 655304457);
		map.put(655304458, 655304458);
		map.put(655304459, 655304459);
		map.put(655304462, 655304462);
		map.put(655304463, 655304463);
		map.put(655304464, 655304464);
		map.put(655304465, 655304465);
		map.put(655369992, 655369992);
		map.put(655369993, 655369993);
		map.put(655369994, 655369994);
		map.put(655369995, 655369995);
		map.put(655369998, 655369998);
		map.put(655369999, 655369999);
		map.put(655370000, 655370000);
		map.put(655370001, 655370001);
		map.put(655435528, 655435528);
		map.put(655435529, 655435529);
		map.put(655435530, 655435530);
		map.put(655435531, 655435531);
		map.put(655501064, 655501064);
		map.put(655501065, 655501065);
		map.put(655501066, 655501066);
		map.put(655501067, 655501067);
		map.put(655501068, 655501068);

		System.out.println("size = " + map.size());
		Assert.assertEquals(33, map.size());
	}

	@Test
	public void testJdk() {
		HashMap<Integer, Integer> map = new HashMap<>();

		map.put(655238920, 655238920);
		map.put(655238921, 655238921);
		map.put(655238922, 655238922);
		map.put(655238923, 655238923);
		map.put(655238926, 655238926);
		map.put(655238927, 655238927);
		map.put(655238928, 655238928);
		map.put(655238929, 655238929);
		map.put(655304456, 655304456);
		map.put(655304457, 655304457);
		map.put(655304458, 655304458);
		map.put(655304459, 655304459);
		map.put(655304462, 655304462);
		map.put(655304463, 655304463);
		map.put(655304464, 655304464);
		map.put(655304465, 655304465);
		map.put(655369992, 655369992);
		map.put(655369993, 655369993);
		map.put(655369994, 655369994);
		map.put(655369995, 655369995);
		map.put(655369998, 655369998);
		map.put(655369999, 655369999);
		map.put(655370000, 655370000);
		map.put(655370001, 655370001);
		map.put(655435528, 655435528);
		map.put(655435529, 655435529);
		map.put(655435530, 655435530);
		map.put(655435531, 655435531);
		map.put(655501064, 655501064);
		map.put(655501065, 655501065);
		map.put(655501066, 655501066);
		map.put(655501067, 655501067);
		map.put(655501068, 655501068);

		System.out.println("size = " + map.size());
		Assert.assertEquals(33, map.size());
	}
}
