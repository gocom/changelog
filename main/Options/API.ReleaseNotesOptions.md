[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / ReleaseNotesOptions

# Interface: ReleaseNotesOptions

Defined in: [types/ReleaseNotes.ts:54](https://github.com/gocom/changelog/blob/5d7ff763e9deecbf9d2eedbc66ef1099bf6b11d7/src/types/ReleaseNotes.ts#L54)

Release notes options.

Available options for [asReleaseNotes](../API/API.asReleaseNotes.md).

## Properties

### changelog

> **changelog**: [`Changelog`](../Types/API.Changelog.md)

Defined in: [types/ReleaseNotes.ts:58](https://github.com/gocom/changelog/blob/5d7ff763e9deecbf9d2eedbc66ef1099bf6b11d7/src/types/ReleaseNotes.ts#L58)

Changelog to format as release notes.

***

### template?

> `optional` **template**: `string` \| `string`[]

Defined in: [types/ReleaseNotes.ts:81](https://github.com/gocom/changelog/blob/5d7ff763e9deecbf9d2eedbc66ef1099bf6b11d7/src/types/ReleaseNotes.ts#L81)

Template strings.

The template is passed down to handlebars, allowing the use of variables and handlebars templating language
to format the release notes. Available template variables include the properties from the [Changelog](../Types/API.Changelog.md)
object and others:

- `{{isPrerelease}}`
- `{{notes}}`
- `{{title}}`
- `{{version}}`
- `{{major}}`
- `{{minor}}`
- `{{patch}}`

See [defaultReleaseNotesTemplate](../API/Private.defaultReleaseNotesTemplate.md) for the default template. If the given template is an array of templates,
resulting contents are joined together as separate paragraphs. Templates that evaluate empty, are skipped. This
allows wrapping the templates into if conditionals, omitting the template, if it is not needed.

#### See

[Handlebars](https://handlebarsjs.com/)
