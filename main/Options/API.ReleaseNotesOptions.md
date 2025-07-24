[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / ReleaseNotesOptions

# Interface: ReleaseNotesOptions

Defined in: [types/ReleaseNotes.ts:37](https://github.com/gocom/changelog/blob/c300ceda8a5cb6aad0ac92a8076ab894cbc94c3c/src/types/ReleaseNotes.ts#L37)

Release notes options.

Available options for [asReleaseNotes](../API/API.asReleaseNotes.md).

## Properties

### changelog

> **changelog**: [`Changelog`](../Types/API.Changelog.md)

Defined in: [types/ReleaseNotes.ts:41](https://github.com/gocom/changelog/blob/c300ceda8a5cb6aad0ac92a8076ab894cbc94c3c/src/types/ReleaseNotes.ts#L41)

Changelog to format as release notes.

***

### template?

> `optional` **template**: `string` \| `string`[]

Defined in: [types/ReleaseNotes.ts:70](https://github.com/gocom/changelog/blob/c300ceda8a5cb6aad0ac92a8076ab894cbc94c3c/src/types/ReleaseNotes.ts#L70)

Template strings.

The template is passed down to handlebars, allowing the use of variables and handlebars templating language
to format the release notes. Available template variables include the properties from the [Release](../Types/API.Release.md)
object:

- `{{isPrerelease}}`
- `{{notes}}`
- `{{titleStart}}`
- `{{titleEnd}}`
- `{{version}}`
- `{{major}}`
- `{{minor}}`
- `{{patch}}`
- `{{prerelease}}`

See [Private!defaultReleaseNotesTemplate](../API/Private.defaultReleaseNotesTemplate.md) for the default template that is used if one is not given.
Mote that the default template may change between releases; if consistent output is important, it is recommended
that you always provide your own template.

If the given template is an array of templates, resulting contents are joined together as separate paragraphs.
Templates that evaluate as empty, are omitted, avoiding additional whitespace being added. This allows wrapping
the templates into if conditionals, omitting the template, if it is not needed.

#### See

[Handlebars](https://handlebarsjs.com/)

***

### variables?

> `optional` **variables**: [`TemplateVariables`](../Types/API.TemplateVariables.md)

Defined in: [types/ReleaseNotes.ts:92](https://github.com/gocom/changelog/blob/c300ceda8a5cb6aad0ac92a8076ab894cbc94c3c/src/types/ReleaseNotes.ts#L92)

Custom variables passed down to the template.

Allows adding custom template variables that are passed down to Handlebars template.

#### Example

Allows passing any values to the template. Takes an object of key-value pairs:
```ts
{
 package: "example-package"
}
```
The `name` can then be accessed through the [ReleaseNotesOptions.template](#template) option's
Handlebar template:
```markdown
Install with npm:

    npm {{package}}:^{{version}}
```
