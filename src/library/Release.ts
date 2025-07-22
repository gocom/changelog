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

import {major, minor, patch, prerelease} from 'semver';
import type {Release} from '../types/Release';
import type {Changelog} from '../types/Changelog';

/**
 * Gets the given changelog as expanded release details.
 *
 * Processes the given changelog and returns it with extended number of details. This function is internally also
 * used by {@link asReleaseNotes} function to provide the template variables.
 *
 * @param {Changelog} changelog The changelog to process.
 * @return {Release} Release details.
 * @group Library
 * @category API
 */
export const getRelease = (changelog: Changelog): Release => {
  const pre = prerelease(changelog.version) || undefined;

  return {
    ...changelog,
    isPrerelease: !!pre,
    major: major(changelog.version),
    minor: minor(changelog.version),
    patch: patch(changelog.version),
    prerelease: pre,
  };
};
