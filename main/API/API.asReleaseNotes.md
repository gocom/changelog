[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / asReleaseNotes

# Function: asReleaseNotes()

> **asReleaseNotes**(`options`): `string`

Defined in: [library/ReleaseNotes.ts:92](https://github.com/gocom/changelog/blob/1f32b5a38873cf1adffe09e61e1be6c08cf559d1/src/library/ReleaseNotes.ts#L92)

Returns the given version changelog as formatted release notes.

Formats the given [ReleaseNotesOptions.changelog](../Options/API.ReleaseNotesOptions.md#changelog) into release notes using a Handlebar template set
with [ReleaseNotesOptions.template](../Options/API.ReleaseNotesOptions.md#template) option. This function can be used together with [extract](API.extract.md),
[latest](API.latest.md) or [parse](API.parse.md) to format human-readable release notes for released versions.

## Parameters

### options

[`ReleaseNotesOptions`](../Options/API.ReleaseNotesOptions.md)

Options.

## Returns

`string`

Formatted release notes.

## Example

The following would extract the latest version, 0.2.0, from the changelog and format it to Markdown
based release notes:
```ts
import {latest, asReleaseNotes} from '@gocom/changelog';

const changelog = latest(`
# Changelog

## 0.2.0

* Added a feature A.

## 0.1.0

* Initial release.
`);

const releaseNotes = asReleaseNotes({
 changelog,
 template: '## Changes in {{version}}\n\n{{notes}}',
});
```
The `releaseNotes` variable would become:
```Markdown
## Changes in 0.2.0

* Added a feature A.
```
