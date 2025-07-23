[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / Release

# Interface: Release

Defined in: [types/Release.ts:34](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Release.ts#L34)

Detailed release results.

## Extends

- [`Changelog`](API.Changelog.md)

## Properties

### build?

> `optional` **build**: readonly `string`[]

Defined in: [types/Release.ts:56](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Release.ts#L56)

Build identifier component from the version number.

Will be `undefined` if the version number did not contain build identifier, an array of build identifier
otherwise.

***

### isPrerelease?

> `optional` **isPrerelease**: `boolean`

Defined in: [types/Changelog.ts:64](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Changelog.ts#L64)

Whether the version is considered pre-release.

#### Inherited from

[`Changelog`](API.Changelog.md).[`isPrerelease`](API.Changelog.md#isprerelease)

***

### major

> **major**: `number`

Defined in: [types/Release.ts:38](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Release.ts#L38)

Major version number component from the version number.

***

### minor

> **minor**: `number`

Defined in: [types/Release.ts:43](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Release.ts#L43)

Minor version number component from the version number.

***

### notes

> **notes**: `string`

Defined in: [types/Changelog.ts:59](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Changelog.ts#L59)

Changelog contents, such as release notes.

Contains the body content from under the version heading, up to the next heading.

#### Inherited from

[`Changelog`](API.Changelog.md).[`notes`](API.Changelog.md#notes)

***

### patch

> **patch**: `number`

Defined in: [types/Release.ts:48](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Release.ts#L48)

Patch version number component from the version number.

***

### prerelease?

> `optional` **prerelease**: readonly (`string` \| `number`)[]

Defined in: [types/Release.ts:64](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Release.ts#L64)

Prerelease component from the version number.

Will be `undefined` if the version number did not contain prerelease component, an array of prerelease identifiers
otherwise.

***

### titleEnd?

> `optional` **titleEnd**: `string`

Defined in: [types/Changelog.ts:80](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Changelog.ts#L80)

Content at the end of the title.

Any custom content from the header line from before the version
number.

#### Inherited from

[`Changelog`](API.Changelog.md).[`titleEnd`](API.Changelog.md#titleend)

***

### titleStart?

> `optional` **titleStart**: `string`

Defined in: [types/Changelog.ts:72](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Changelog.ts#L72)

Content at the start of the title.

Any custom content from the header line from before the version
number.

#### Inherited from

[`Changelog`](API.Changelog.md).[`titleStart`](API.Changelog.md#titlestart)

***

### version

> **version**: `string`

Defined in: [types/Changelog.ts:52](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/types/Changelog.ts#L52)

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

#### Inherited from

[`Changelog`](API.Changelog.md).[`version`](API.Changelog.md#version)
