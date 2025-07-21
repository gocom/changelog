[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / extract

# Function: extract()

> **extract**(`options`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:40](https://github.com/gocom/changelog/blob/6ecf3d82271243a19bf949b1b2aa8e1b05030346/src/library/Extract.ts#L40)

Extracts the specified version from the given changelog.

## Parameters

### options

[`ExtractOptions`](../Options/API.ExtractOptions.md)

Options.

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Returns changelog for the version, or `undefined`, if the version could not
be found from the changelog, or the version number is not a valid semantic version number.
