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
import type {ReleaseNotesOptions} from '../types/ReleaseNotes';
import type {Template} from '../types/Template';
import {trim} from './Helpers';
import {getRelease} from './Release';

/**
 * Default release notes template.
 *
 * Contains a Handlebar's template string.
 *
 * @group Library
 * @category API
 */
export const defaultReleaseNotesTemplate: Template[] = [`
{{#if isPrerelease}}
⚠️ **This is a prerelease for {{major}}.{{minor}}.{{patch}}. This release is not intended for production use.**
{{/if}}
`,
  `{{#if notes}}
## 🚀 Notes for {{version}}

{{notes}}
{{/if}}`];

/**
 * Returns the given version changelog as formatted release notes.
 *
 * Formats the given {@link ReleaseNotesOptions.changelog} into release notes using a Handlebar template set
 * with {@link ReleaseNotesOptions.template} option. This function can be used together with {@link extract},
 * {@link latest} or {@link parse} to format human-readable release notes for released versions.
 *
 * @param {ReleaseNotesOptions} options Options.
 * @return {string} Formatted release notes.
 * @group Library
 * @category API
 * @example
 * The following would extract the latest version, 0.2.0, from the changelog and format it to Markdown
 * based release notes:
 * ```ts
 * import {latest, asReleaseNotes} from '@gocom/changelog';
 *
 * const changelog = latest(`
 * # Changelog
 *
 * ## 0.2.0
 *
 * * Added a feature A.
 *
 * ## 0.1.0
 *
 * * Initial release.
 * `);
 *
 * const releaseNotes = asReleaseNotes({
 *  changelog,
 *  template: '## Changes in {{version}}\n\n{{notes}}',
 * });
 * ```
 * The `releaseNotes` variable would become:
 * ```Markdown
 * ## Changes in 0.2.0
 *
 * * Added a feature A.
 * ```
 */
export const asReleaseNotes = (
  options: ReleaseNotesOptions
): string => {
  const rawInput = options.template ?? defaultReleaseNotesTemplate;
  const results: string[] = [];

  const inputs = Array.isArray(rawInput)
    ? rawInput
    : [rawInput];

  const context = getRelease(options.changelog);

  for (const input of inputs) {
    const template = compile(input);

    const content = trim(
      template({
        ...context,
        ...options.variables,
      })
    );

    if (content) {
      results.push(content);
    }
  }

  return results.join("\n\n");
};
