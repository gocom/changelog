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

import type {Version} from './Version';

/**
 * Changelog result for a version.
 *
 * @group Library
 * @category Types
 */
export interface Changelog {
  /**
   * Version the changelog is for.
   *
   * Version number in semantic versioning format. If in the changelog document the version number started
   * with `v` prefix, it will be stripped off.
   *
   * @see [Semantic Versioning](https://semver.org/)
   * @example
   * Example valid `version` values would include:
   * ```
   * 0.1.0
   * 3.945.12
   * 1.0.0-beta
   * 1.0.0-alpha.1
   * 1.0.0-rc.5
   * ```
   */
  version: Version

  /**
   * Changelog contents, such as release notes.
   *
   * Contains the body content from under the version heading, up to the next heading.
   */
  notes: string

  /**
   * Whether the version is considered pre-release.
   */
  isPrerelease?: boolean

  /**
   * Content at the start of the title.
   *
   * Any custom content from the header line from before the version
   * number.
   */
  titleStart?: string

  /**
   * Content at the end of the title.
   *
   * Any custom content from the header line from before the version
   * number.
   */
  titleEnd?: string
}
