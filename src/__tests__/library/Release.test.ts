/*!
 * Changelog
 * https://github.com/gocom/changelog
 *
 * Copyright (C) 2025 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {getRelease} from "../../library/Release";

test('basic', () => {
  const actual = getRelease({
    version: '0.1.0',
    notes: '',
    isPrerelease: false,
  });

  expect(actual).toEqual({
    isPrerelease: false,
    build: undefined,
    major: 0,
    minor: 1,
    notes: '',
    patch: 0,
    prerelease: undefined,
    version: '0.1.0',
  });
});

test('pre-release', () => {
  const actual = getRelease({
    version: '3.12.4-alpha.3',
    notes: '',
    isPrerelease: true,
  });

  expect(actual).toEqual({
    isPrerelease: true,
    build: undefined,
    major: 3,
    minor: 12,
    notes: '',
    patch: 4,
    prerelease: [
      'alpha',
      3,
    ],
    version: '3.12.4-alpha.3',
  });
});

test('build identifier', () => {
  const actual = getRelease({
    version: '3.12.4-alpha+build1',
    notes: '',
    isPrerelease: true,
  });

  expect(actual).toEqual({
    isPrerelease: true,
    build: [
      'build1',
    ],
    major: 3,
    minor: 12,
    notes: '',
    patch: 4,
    prerelease: [
      'alpha',
    ],
    version: '3.12.4-alpha+build1',
  });
});

test('invalid', () => {
  const actual = getRelease({
    version: 'invalid',
    notes: '',
    isPrerelease: false,
  });

  expect(actual).toBeUndefined();
});
