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

import {parse} from './Parser';
import type {Changelog} from '../types/Changelog';
import type {ChangelogDocument} from '../types/Document';
import type {ExtractOptions} from '../types/Extract';

/**
 * Extracts the specified version from the given changelog.
 *
 * The function would extract the specified {@link ExtractOptions.version} from the given Markdown based
 * changelog provided with the {@link ExtractOptions.contents} option.
 *
 * @param {ExtractOptions} options Options.
 * @return {Changelog|undefined} Returns changelog for the version, or `undefined`, if the version could not
 * be found from the changelog, or the version number is not a valid semantic version number.
 * @group Library
 * @category API
 * @example
 * The following would extract version 0.2.0's notes from the given {@link ExtractOptions.contents}:
 * ```ts
 * import {extract} from '@gocom/changelog';
 *
 * const changelog = extract({
 *  version: '0.2.0',
 *  contents: `
 * # Changelog
 *
 * ## Version 1.3.0
 *
 * * Change 1
 * * Change 2
 *
 * ## Version 0.2.0
 *
 * * Change 1
 * * Change 2
 *
 * ## Version 0.1.0
 *
 * * Initial release.
 *  `,
 * });
 * ```
 * The `changelog` variable would contain {@link Changelog} object with the details about the requested 0.2.0.
 */
export const extract = (
  options: ExtractOptions
): Changelog|undefined => {
  const {
    contents,
    version,
  } = options;

  return parse(contents)
    .find((changelog) => changelog.version === version);
};

/**
 * Gets the latest version from the given changelog document contents.
 *
 * The versions are sorted based semantic versioning rules, and the latest version is
 * extracted from the changelog. If there is no version numbers in the given
 * contents, return undefined.
 *
 * @param {ChangelogDocument} contents
 * @return {Changelog|undefined} Changelog for the latest version, or `undefined` if there were no valid versions
 * available in the changelog.
 * @group Library
 * @category API
 * @example
 * ```
 * ```
 */
export const latest = (
  contents: ChangelogDocument
): Changelog|undefined => {
  return parse(contents)[0];
};
