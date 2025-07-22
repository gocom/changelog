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
