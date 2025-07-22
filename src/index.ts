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

/**
 * Extract release notes from Markdown formatted changelog document.
 *
 * Allows parsing CHANGELOG.md document contents, and extracting release notes from it.
 * Written in TypeScript, and supports both client-side web browser and Node.js backend usage.
 *
 * @module API
 * @group Library
 * @category Public
 * @see [GitHub](https://github.com/gocom/changelog)
 * @see [Package in npm registry](https://www.npmjs.com/package/@gocom/changelog)
 * @see [Releases](https://github.com/gocom/changelog/releases)
 * @see [Example CHANGELOG.md](https://github.com/gocom/changelog/blob/main/CHANGELOG.md)
 */

export {
  extract,
  latest,
} from './library/Extract';

export {
  parse,
} from './library/Parser';

export type {
  getRelease,
} from './library/Release';

export type {
  asReleaseNotes,
} from './library/ReleaseNotes';

export type {
  Changelog,
} from './types/Changelog';

export type {
  ChangelogDocument,
} from './types/Document';

export type {
  ExtractOptions,
} from './types/Extract';

export type {
  Release,
} from './types/Release';

export type {
  ReleaseNotesOptions,
} from './types/ReleaseNotes';

export type {
  Template,
} from './types/Template';

export type {
  Version,
} from './types/Version';
