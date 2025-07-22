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

import {compile} from 'handlebars';
import {major, minor, patch} from 'semver';
import type {ReleaseNotesOptions} from '../types/ReleaseNotes';
import {defaultReleaseNotesTemplate} from '../types/ReleaseNotes';
import {trim} from './Helpers';

/**
 * Returns the given changelog as a formatted release notes.
 *
 * @param {ReleaseNotesOptions} options
 * @return {string}
 * @group Library
 * @category API
 */
export const asReleaseNotes = (
  options: ReleaseNotesOptions
): string => {
  const rawInput = options.template ?? defaultReleaseNotesTemplate;
  const results: string[] = [];

  const inputs = Array.isArray(rawInput)
    ? rawInput
    : [rawInput];

  const context = {
    ...options.changelog,
    major: major(options.changelog.version),
    minor: minor(options.changelog.version),
    patch: patch(options.changelog.version),
  };

  for (const input of inputs) {
    const template = compile(input);

    const content = trim(
      template(context)
    );

    if (content) {
      results.push(content);
    }
  }

  return results.join("\n\n");
};
