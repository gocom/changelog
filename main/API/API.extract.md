[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / extract

# Function: extract()

> **extract**(`options`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:40](https://github.com/gocom/changelog/blob/5d7ff763e9deecbf9d2eedbc66ef1099bf6b11d7/src/library/Extract.ts#L40)

Extracts the specified version from the given changelog.

## Parameters

### options

[`ExtractOptions`](../Options/API.ExtractOptions.md)

Options.

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Returns changelog for the version, or `undefined`, if the version could not
be found from the changelog, or the version number is not a valid semantic version number.
