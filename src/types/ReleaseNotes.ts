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

import type {Template} from './Template';
import type {Changelog} from './Changelog';

/**
 * Default release notes template.
 *
 * @group Library
 * @category API
 */
export const defaultReleaseNotesTemplate = [`
{{#if isPrerelease}}
⚠️ **This is a prerelease for {{major}}.{{minor}}.{{patch}}. This release is not intended for production use.**
{{/if}}
`,
`{{#if notes}}
## 🚀 Notes for {{version}}

{{notes}}
{{/if}}`];

/**
 * Release notes options.
 *
 * Available options for {@link asReleaseNotes}.
 *
 * @group Library
 * @category Options
 */
export interface ReleaseNotesOptions {
  /**
   * Changelog to format as release notes.
   */
  changelog: Changelog

  /**
   * Template strings.
   *
   * The template is passed down to handlebars, allowing the use of variables and handlebars templating language
   * to format the release notes. Available template variables include the properties from the {@link Changelog}
   * object and others:
   *
   * - `{{isPrerelease}}`
   * - `{{notes}}`
   * - `{{title}}`
   * - `{{version}}`
   * - `{{major}}`
   * - `{{minor}}`
   * - `{{patch}}`
   *
   * See {@link defaultReleaseNotesTemplate} for the default template. If the given template is an array of templates,
   * resulting contents are joined together as separate paragraphs. Templates that evaluate empty, are skipped. This
   * allows wrapping the templates into if conditionals, omitting the template, if it is not needed.
   *
   * @see [Handlebars](https://handlebarsjs.com/)
   */
  template?: Template|Template[]
}
