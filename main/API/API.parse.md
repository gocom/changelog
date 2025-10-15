[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / parse

# Function: parse()

> **parse**(`contents`): [`Changelog`](../Types/API.Changelog.md)[]

Defined in: [library/Parser.ts:87](https://github.com/gocom/changelog/blob/cc3b7d1c5efcd58c3abc117b9a9e3a34830f5b86/src/library/Parser.ts#L87)

Parses the given changelog document content.

Extracts full changelog per each version from the given Markdown formatted changelog document. In the document,
each released version would be its own section, separated by Markdown headings, followed by the release
notes. The heading should contain the version number in semantic versioning format, and release notes would be
written under the heading.

The changelog document can contain leading and trailing content after the version number sections, and other
non-changelog sections, under non-version number headings; those will be ignored.

Returned version changelogs array will be sorted by version numbers according to semantic versioning rules in
descending order. The highest version will be the first array item, and the lowest, the last.

## Parameters

### contents

`string`

Markdown changelog contents.

## Returns

[`Changelog`](../Types/API.Changelog.md)[]

Returns an array of changes per version.

## Example

The following would parse the given Markdown formatted changelog:
```ts
import {parse} from '@gocom/changelog';

const changelog = parse(`
# Changelog

### 1.1.0-alpha.1

* Change 1.
* Change 2.

### 1.0.0 🚀

* Initial public release.
`);
```
The above `changelog` variable would become:
```typescript
[
  {
    version: '1.1.0-alpha.1',
    isPrerelease: true,
    titleStart: '',
    titleEnd: '',
    notes: '* Change 1.\n* Change 2.'
  },
  {
    version: '1.0.0',
    isPrerelease: false,
    titleStart: '',
    titleEnd: '🚀',
    notes: '* Initial public release.'
  }
]
```
