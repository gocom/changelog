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

import type {Changelog} from './Changelog';

/**
 * Detailed release results.
 *
 * @group Library
 * @category Types
 */
export interface Release extends Changelog {
  /**
   * Major version number component from the version number.
   */
  major: number

  /**
   * Minor version number component from the version number.
   */
  minor: number

  /**
   * Patch version number component from the version number.
   */
  patch: number

  /**
   * Build identifier component from the version number.
   *
   * Will be `undefined` if the version number did not contain build identifier, an array of build identifier
   * otherwise.
   */
  build?: readonly string[]

  /**
   * Prerelease component from the version number.
   *
   * Will be `undefined` if the version number did not contain prerelease component, an array of prerelease identifiers
   * otherwise.
   */
  prerelease?: readonly (string | number)[]
}
