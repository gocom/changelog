[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / Release

# Interface: Release

Defined in: [types/Release.ts:34](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Release.ts#L34)

Release details.

## Extends

- [`Changelog`](API.Changelog.md)

## Properties

### isPrerelease?

> `optional` **isPrerelease**: `boolean`

Defined in: [types/Changelog.ts:48](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L48)

Whether the version is considered pre-release.

#### Inherited from

[`Changelog`](API.Changelog.md).[`isPrerelease`](API.Changelog.md#isprerelease)

***

### major

> **major**: `number`

Defined in: [types/Release.ts:38](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Release.ts#L38)

Major version number component from the version number.

***

### minor

> **minor**: `number`

Defined in: [types/Release.ts:43](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Release.ts#L43)

Minor version number component from the version number.

***

### notes

> **notes**: `string`

Defined in: [types/Changelog.ts:43](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L43)

Changelog contents.

#### Inherited from

[`Changelog`](API.Changelog.md).[`notes`](API.Changelog.md#notes)

***

### patch

> **patch**: `number`

Defined in: [types/Release.ts:48](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Release.ts#L48)

Patch version number component from the version number.

***

### prerelease?

> `optional` **prerelease**: readonly (`string` \| `number`)[]

Defined in: [types/Release.ts:53](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Release.ts#L53)

Prerelease component from the version number.

***

### titleEnd?

> `optional` **titleEnd**: `string`

Defined in: [types/Changelog.ts:58](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L58)

Content at the end of the title.

#### Inherited from

[`Changelog`](API.Changelog.md).[`titleEnd`](API.Changelog.md#titleend)

***

### titleStart?

> `optional` **titleStart**: `string`

Defined in: [types/Changelog.ts:53](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L53)

Content at the start of the title.

#### Inherited from

[`Changelog`](API.Changelog.md).[`titleStart`](API.Changelog.md#titlestart)

***

### version

> **version**: `string`

Defined in: [types/Changelog.ts:38](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/types/Changelog.ts#L38)

Version the changelog is for.

#### Inherited from

[`Changelog`](API.Changelog.md).[`version`](API.Changelog.md#version)
