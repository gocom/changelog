[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / Changelog

# Interface: Changelog

Defined in: [types/Changelog.ts:34](https://github.com/gocom/changelog/blob/d7610e18677cf5f8af9dd71b6bce7f7fdfcc40fa/src/types/Changelog.ts#L34)

Changelog result for a version.

## Extended by

- [`Release`](API.Release.md)

## Properties

### isPrerelease?

> `optional` **isPrerelease**: `boolean`

Defined in: [types/Changelog.ts:64](https://github.com/gocom/changelog/blob/d7610e18677cf5f8af9dd71b6bce7f7fdfcc40fa/src/types/Changelog.ts#L64)

Whether the version is considered pre-release.

***

### notes

> **notes**: `string`

Defined in: [types/Changelog.ts:59](https://github.com/gocom/changelog/blob/d7610e18677cf5f8af9dd71b6bce7f7fdfcc40fa/src/types/Changelog.ts#L59)

Changelog contents, such as release notes.

Contains the body content from under the version heading, up to the next heading.

***

### titleEnd?

> `optional` **titleEnd**: `string`

Defined in: [types/Changelog.ts:80](https://github.com/gocom/changelog/blob/d7610e18677cf5f8af9dd71b6bce7f7fdfcc40fa/src/types/Changelog.ts#L80)

Content at the end of the title.

Any custom content from the header line from before the version
number.

***

### titleStart?

> `optional` **titleStart**: `string`

Defined in: [types/Changelog.ts:72](https://github.com/gocom/changelog/blob/d7610e18677cf5f8af9dd71b6bce7f7fdfcc40fa/src/types/Changelog.ts#L72)

Content at the start of the title.

Any custom content from the header line from before the version
number.

***

### version

> **version**: `string`

Defined in: [types/Changelog.ts:52](https://github.com/gocom/changelog/blob/d7610e18677cf5f8af9dd71b6bce7f7fdfcc40fa/src/types/Changelog.ts#L52)

Version the changelog is for.

Version number in semantic versioning format. If in the changelog document the version number started
with `v` prefix, it will be stripped off.

#### See

[Semantic Versioning](https://semver.org/)

#### Example

Example valid `version` values would include:
```
0.1.0
3.945.12
1.0.0-beta
1.0.0-alpha.1
1.0.0-rc.5
```
