[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / Changelog

# Interface: Changelog

Defined in: [types/Changelog.ts:34](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L34)

Changelog result for a version.

## Extended by

- [`Release`](API.Release.md)

## Properties

### isPrerelease?

> `optional` **isPrerelease**: `boolean`

Defined in: [types/Changelog.ts:48](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L48)

Whether the version is considered pre-release.

***

### notes

> **notes**: `string`

Defined in: [types/Changelog.ts:43](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L43)

Changelog contents.

***

### titleEnd?

> `optional` **titleEnd**: `string`

Defined in: [types/Changelog.ts:58](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L58)

Content at the end of the title.

***

### titleStart?

> `optional` **titleStart**: `string`

Defined in: [types/Changelog.ts:53](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L53)

Content at the start of the title.

***

### version

> **version**: `string`

Defined in: [types/Changelog.ts:38](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L38)

Version the changelog is for.
