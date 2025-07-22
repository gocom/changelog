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

import {prerelease, valid, rcompare} from 'semver';
import type {Changelog} from '../types/Changelog';
import type {ChangelogDocument} from '../types/Document';
import {cutAtTrailingHeading, markerToHeadingLevel, trimDividers} from './Helpers';

/**
 * Regular expression used for splitting changelog sections into parts.
 *
 * The regex looks for version number heading from the Markdown content, and splits the document by them.
 *
 * When passed down to {@link String.split}, we end up with each capture group in a flat array, from where
 * each item can be chunked into grouped objects.
 */
const sectionsSplitRegex = /^(?: {0,3}(#{1,6}) ((?:[^\r\n]+ )?)v?([0-9]+\.[0-9]+\.[0-9]+(?:[-+][a-z0-9-_.+]+)?)([^\r\n]*)|((?:[^\r\n]+ )?)v?([0-9]+\.[0-9]+\.[0-9]+(?:[-+][a-z0-9-_.+]+)?)([^\r\n]*)[\r\n] {0,3}([=-]+))$/gmi;

/**
 * Parses the given changelog document content.
 *
 * Extracts full changelog per each version from the given Markdown formatted changelog document. In the document,
 * each released version would be its own section, separated by Markdown headings, followed by the release
 * notes. The heading should contain the version number in semantic versioning format, and release notes would be
 * written under the heading.
 *
 * The changelog document can contain leading and trailing content after the version number sections, and other
 * non-changelog sections, under non-version number headings; those will be ignored.
 *
 * Returned version changelogs array will be sorted by version numbers according to semantic versioning rules in
 * descending order. The highest version will be the first array item, and the lowest, the last.
 *
 * @param {string} contents Markdown changelog contents.
 * @return {Changelog[]} Returns an array of changes per version.
 * @group Library
 * @category API
 * @example
 * The following would parse the given Markdown formatted changelog:
 * ```ts
 * import {parse} from '@gocom/changelog';
 *
 * const changelog = parse(`
 * # Changelog
 *
 * ### 1.1.0-alpha.1
 *
 * * Change 1.
 * * Change 2.
 *
 * ### 1.0.0 🚀
 *
 * * Initial public release.
 * `);
 * ```
 * The above `changelog` variable would become:
 * ```typescript
 * [
 *   {
 *     version: '1.1.0-alpha.1',
 *     isPrerelease: true,
 *     titleStart: '',
 *     titleEnd: '',
 *     notes: '* Change 1.\n* Change 2.'
 *   },
 *   {
 *     version: '1.0.0',
 *     isPrerelease: false,
 *     titleStart: '',
 *     titleEnd: '🚀',
 *     notes: '* Initial public release.'
 *   }
 * ]
 * ```
 */
export const parse = (
  contents: ChangelogDocument
): Changelog[] => {
  const sections = contents
    .split(sectionsSplitRegex)
    .filter((item) => item !== undefined)
    .slice(1);

  const groupBy = 5;
  const results: Changelog[] = [];

  for (let i = 0; i < sections.length; i += groupBy) {
    const chunk = sections[i].startsWith('#')
      ? [...sections.slice(i + 1, i + groupBy), ...[sections[i]]]
      : [sections[i], sections[i+1], sections[i+2], sections[i+4], sections[i+3]];

    const [
      titleStart,
      version,
      titleEnd,
      notes,
      marker,
    ] = chunk;

    if (valid(version)) {
      const level = markerToHeadingLevel(marker);

      results.push({
        version,
        isPrerelease: !!prerelease(version),
        titleStart: trimDividers(titleStart),
        titleEnd: trimDividers(titleEnd),
        notes: cutAtTrailingHeading(level, notes),
      });
    }
  }

  results.sort((a, b) => rcompare(a.version, b.version));

  return results;
};
