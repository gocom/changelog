[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / extract

# Function: extract()

> **extract**(`version`, `contents`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:41](https://github.com/gocom/changelog/blob/db749aeb3b7fa142eb99a35449a056a38ba2e6fc/src/library/Extract.ts#L41)

Extracts the specified version from the given changelog.

## Parameters

### version

`string`

Version to extract

### contents

`string`

Markdown changelog contents

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Returns changelog for the version, or `undefined`, if the version could not
be found from the changelog, or the version number is not a valid semantic version number.
