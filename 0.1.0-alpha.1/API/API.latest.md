[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / latest

# Function: latest()

> **latest**(`contents`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:118](https://github.com/gocom/changelog/blob/1894cf52b580ae6d25ac0693a4276a3bb2024cf9/src/library/Extract.ts#L118)

Gets the latest version from the given changelog document contents.

The versions are sorted based semantic versioning rules, and the latest version is
extracted from the changelog. If there is no version numbers in the given
contents, return undefined.

If you want to get some other version from the changelog, see [extract](API.extract.md), or [parse](API.parse.md) if
you want to parse the whole changelog.

## Parameters

### contents

`string`

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Changelog for the latest version, or `undefined` if there were no valid versions
available in the changelog.

## Example

The following would extract version `3.0.0` from the changelog, as it is the greatest version listed:
```ts
import {latest} from '@gocom/changelog';

const changelog = latest(`
# Changelog

### 2.0.0

* Change

### 3.0.0

* Change
`);

console.log(changelog.version);
```
The above would log `3.0.0`.
