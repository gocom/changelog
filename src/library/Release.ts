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

import {parse} from 'semver';
import type {Release} from '../types/Release';
import type {Changelog} from '../types/Changelog';

/**
 * Gets the given changelog as expanded release details.
 *
 * Processes the given changelog and returns it with extended number of details. This function is internally also
 * used by {@link asReleaseNotes} function to provide the template variables.
 *
 * @param {Changelog} changelog The changelog to process.
 * @return {Release|undefined} Release details, or `undefined` if the given changelog is not valid.
 * @group Library
 * @category API
 */
export const getRelease = (changelog: Changelog): Release|undefined => {
  const version = parse(changelog.version);

  if (version) {
    const {
      major,
      minor,
      patch,
      build,
      prerelease
    } = version;

    return {
      ...changelog,
      isPrerelease: !!prerelease.length,
      major,
      minor,
      patch,
      build: build.length
        ? build
        : undefined,
      prerelease: prerelease.length
        ? prerelease
        : undefined,
    };
  }

  return undefined;
};
