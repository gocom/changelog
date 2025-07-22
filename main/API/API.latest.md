[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / latest

# Function: latest()

> **latest**(`contents`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:64](https://github.com/gocom/changelog/blob/d833f9f4723e9cd72f6aee7d9bd8b3ae0eed8089/src/library/Extract.ts#L64)

Gets the latest version from the given changelog document contents.

The versions are sorted based semantic versioning rules, and the latest version is
extracted from the changelog. If there is no marked version number in the do

## Parameters

### contents

`string`

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Changelog for the latest version, or `undefined` if there were no valid versions
available in the changelog.
