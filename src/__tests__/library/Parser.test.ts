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

import {parse} from '../../library/Parser';

test('basic', () => {
  const actual = parse(`
# Changelog

The changelog will also contain upcoming versions. Refer to tags, GitHub releases or npm registry for the latest
release.

1.0
=====

1.0.0 - some description
---

* Initial stable release.

Internal versions
=====

v0.4.0
===

* We did some other thing.
* And something else too.

0.3.0
-

* We did a thing.

## v0.2.0+100

* First line.
* Second line.
* Line with \`##\` in it.

### 0.1.0

* Change.

## 2.0.0

* Test.

### Important notes

Migrating to this version might be difficult.

## Changes in 2.0.0-alpha.1

* Test.

## Notice to readers.

* Some content here.

`);

  expect(actual).toEqual(
    [
      {
        version: '2.0.0',
        isPrerelease: false,
        titleStart: '',
        titleEnd: '',
        notes: '* Test.\n' +
          '\n' +
          '### Important notes\n' +
          '\n' +
          'Migrating to this version might be difficult.'
      },
      {
        version: '2.0.0-alpha.1',
        isPrerelease: true,
        titleStart: 'Changes in',
        titleEnd: '',
        notes: '* Test.'
      },
      {
        version: '1.0.0',
        isPrerelease: false,
        titleStart: '',
        titleEnd: 'some description',
        notes: '* Initial stable release.'
      },
      {
        version: '0.3.0',
        isPrerelease: false,
        titleStart: '',
        titleEnd: '',
        notes: '* We did a thing.'
      },
      {
        version: '0.2.0+100',
        isPrerelease: false,
        titleStart: '',
        titleEnd: '',
        notes: '* First line.\n* Second line.\n* Line with `##` in it.\n\n### 0.1.0\n\n* Change.'
      },
    ]
  );
});

test('readme example', () => {
  const changelog = parse(`
# Changelog

### 1.1.0-alpha.1

* Change 1.
* Change 2.

### 1.0.0 🚀

* Initial public release.
`);

  expect(changelog).toEqual([
    {
      version: '1.1.0-alpha.1',
      isPrerelease: true,
      titleStart: '',
      titleEnd: '',
      notes: '* Change 1.\n* Change 2.'
    },
    {
      version: '1.0.0',
      isPrerelease: false,
      titleStart: '',
      titleEnd: '🚀',
      notes: '* Initial public release.'
    }
  ]);
});

test('GitHub style Markdown parser supports up-to 3 leading spaces on heading lines', () => {
  const changelog = parse(`
   # Changelog

   ### 2.0.0

   * Change 1.

   ### 1.0.0

   * Initial public release.
`);

  expect(changelog).toEqual([
    {
      version: '2.0.0',
      isPrerelease: false,
      titleStart: '',
      titleEnd: '',
      notes: '   * Change 1.'
    },
    {
      version: '1.0.0',
      isPrerelease: false,
      titleStart: '',
      titleEnd: '',
      notes: '   * Initial public release.'
    }
  ]);
});

test('Tabs do not count as spaces', () => {
  const changelog = parse(`
\t# Changelog

\t### 1.0.0

* Change.
`);

  expect(changelog).toEqual([]);
});

test('uses h1', () => {
  const actual = parse(`
2.0.0
=====

* Change.

1.0.0
=====

* Change.
`);

  expect(actual).toEqual(
    [
      {
        version: '2.0.0',
        isPrerelease: false,
        titleStart: '',
        titleEnd: '',
        notes: '* Change.',
      },
      {
        version: '1.0.0',
        isPrerelease: false,
        titleStart: '',
        titleEnd: '',
        notes: '* Change.',
      },
    ]
  );
});
