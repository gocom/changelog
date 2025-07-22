[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / ChangelogDocument

# Type Alias: ChangelogDocument

> **ChangelogDocument** = `string`

Defined in: [types/Document.ts:38](https://github.com/gocom/changelog/blob/1894cf52b580ae6d25ac0693a4276a3bb2024cf9/src/types/Document.ts#L38)

Markdown formatted changelog document as a string.

In the document, each released version is its own section, separated by Markdown headings, followed by the release
notes. The heading should contain the version number in semantic versioning format, and release notes would be
written under the heading.

## See

 - [Semantic Versioning](https://semver.org/)
 - [Example CHANGELOG.md](https://github.com/gocom/changelog/blob/main/CHANGELOG.md?plain=1)
