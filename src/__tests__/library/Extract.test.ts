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

import {extract, latest} from '../../library/Extract';

test('extract', () => {
  const contents = `
# Changelog

## 0.1.0

* Change 1

## 1.2.0

* Change 1

## 0.2.0

* Change 1
`;

  const actual1 = extract({
    contents,
    version: '1.2.0',
  });

  expect(actual1?.version).toBe('1.2.0');

  const actual2 = extract({
    contents,
    version: '2.5.0',
  });

  expect(actual2).toBeUndefined();
});

test('latest found', () => {
  const actual = latest(`
# Changelog

## 0.1.0

* Change 1

## 1.2.0

* Change 1

## 0.2.0

* Change 1
`);

  expect(actual?.version).toBe('1.2.0');
});

test('latest not found', () => {
  const actual = latest('');

  expect(actual).toBeUndefined();
});
