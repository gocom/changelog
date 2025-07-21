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

import type {Changelog} from '../types/Changelog';
import type {Version} from '../types/Version';
import type {ChangelogDocument} from '../types/Document';
import {parse} from './Parser';

/**
 * Extracts the specified version from the given changelog.
 *
 * @param {Version} version Version to extract
 * @param {ChangelogDocument} contents Markdown changelog contents
 * @return {Changelog|undefined} Returns changelog for the version, or `undefined`, if the version could not
 * be found from the changelog, or the version number is not a valid semantic version number.
 * @group Library
 * @category API
 */
export const extract = (
  version: Version,
  contents: ChangelogDocument
): Changelog|undefined => {
  return parse(contents)
    .find((changelog) => changelog.version === version);
};

/**
 * Gets the latest version from the given changelog document contents.
 *
 * The versions are sorted based semantic versioning rules, and the latest version is
 * extracted from the changelog. If there is no marked version number in the d
 *
 * @param {ChangelogDocument} contents
 * @return {Changelog|undefined} Changelog for the latest version, or `undefined` if there were no valid versions
 * available in the changelog.
 * @group Library
 * @category API
 */
export const latest = (
  contents: ChangelogDocument
): Changelog|undefined => {
  return parse(contents)[0];
};
