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

/**
 * Trim starting and ending new lines from the given content.
 *
 * We are not using `String.trim` as it would potentially break Markdown code
 * blocks, as those can be created with intending paragraphs with spaces.
 *
 * @param {string} content
 * @group Library
 * @category API
 */
export const trim = (content: string) => {
  return content
    .replace(/^[\r\n]+/g, '')
    .replace(/[\r\n]+$/g, '');
};

/**
 * Trims dividers and whitespace from the given content.
 *
 * @param {string} content
 * @group Library
 * @category API
 */
export const trimDividers = (content: string) => {
  return content
    .replace(/^[-|\s]+/gm, '')
    .replace(/\s+$/gm, '');
};

/**
 * Strips off trailing headings from the given content section.
 *
 * @param {string} marker
 * @return {number}
 * @group Library
 * @category API
 */
export const markerToHeadingLevel = (marker: string): number => {
  if (marker.startsWith('=')) {
    return 1;
  }

  if (marker.startsWith('-')) {
    return 2;
  }

  return marker.length;
};

/**
 * Strips off trailing headings from the given content section.
 *
 * Removes headings that level (h1-h6) is higher or equal than the
 * given level. Higher heading are not part of the section and should be removed.
 *
 * @param {number} level
 * @param {string} content
 * @return {string}
 * @group Library
 * @category API
 */
export const cutAtTrailingHeading = (level: number, content: string): string => {
  const headings = [
    /^(?:# [^\r\n]+|.*[\r\n]=+)$/gm,
    /^(?:## [^\r\n]+|.*[\r\n]-+)$/gm,
    /^### [^\r\n]+$/gm,
    /^#### [^\r\n]+$/gm,
    /^##### [^\r\n]+$/gm,
    /^###### [^\r\n]+$/gm,
  ];

  let result: string = content;

  for (let i = 1; i <= level; i++) {
    const regex = headings[i - 1];

    if (regex) {
      result = result.split(regex)[0];
    }
  }

  return trim(result);
};
