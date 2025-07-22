[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / latest

# Function: latest()

> **latest**(`contents`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:98](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/library/Extract.ts#L98)

Gets the latest version from the given changelog document contents.

The versions are sorted based semantic versioning rules, and the latest version is
extracted from the changelog. If there is no version numbers in the given
contents, return undefined.

## Parameters

### contents

`string`

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Changelog for the latest version, or `undefined` if there were no valid versions
available in the changelog.

## Example

```
```
