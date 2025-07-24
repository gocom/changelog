[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / ChangelogDocument

# Type Alias: ChangelogDocument

> **ChangelogDocument** = `string`

Defined in: [types/Document.ts:38](https://github.com/gocom/changelog/blob/5e2dbdeba0e07692fbed65ae5e6a5dd29db1e36c/src/types/Document.ts#L38)

Markdown formatted changelog document as a string.

In the document, each released version is its own section, separated by Markdown headings, followed by the release
notes. The heading should contain the version number in semantic versioning format, and release notes would be
written under the heading.

## See

 - [Semantic Versioning](https://semver.org/)
 - [Example CHANGELOG.md](https://github.com/gocom/changelog/blob/main/CHANGELOG.md?plain=1)
