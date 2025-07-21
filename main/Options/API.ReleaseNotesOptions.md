[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / ReleaseNotesOptions

# Interface: ReleaseNotesOptions

Defined in: [types/ReleaseNotes.ts:49](https://github.com/gocom/changelog/blob/6ecf3d82271243a19bf949b1b2aa8e1b05030346/src/types/ReleaseNotes.ts#L49)

Release notes options.

Available options for [asReleaseNotes](../API/API.asReleaseNotes.md).

## Properties

### changelog

> **changelog**: [`Changelog`](../Types/API.Changelog.md)

Defined in: [types/ReleaseNotes.ts:53](https://github.com/gocom/changelog/blob/6ecf3d82271243a19bf949b1b2aa8e1b05030346/src/types/ReleaseNotes.ts#L53)

Changelog to format as release notes.

***

### template?

> `optional` **template**: `string`

Defined in: [types/ReleaseNotes.ts:71](https://github.com/gocom/changelog/blob/6ecf3d82271243a19bf949b1b2aa8e1b05030346/src/types/ReleaseNotes.ts#L71)

Template string.

The template is passed down to handlebars, allowing the use of variables and handlebars templating language
to format the release notes. Available template variables match the properties in the [Changelog](../Types/API.Changelog.md)
object, including:

- `{{isPrerelease}}`
- `{{notes}}`
- `{{title}}`
- `{{version}}`

See [defaultReleaseNotesTemplate](../API/Private.defaultReleaseNotesTemplate.md) for the default template.

#### See

[Handlebars](https://handlebarsjs.com/)
