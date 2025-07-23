[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / extract

# Function: extract()

> **extract**(`options`): `undefined` \| [`Changelog`](../Types/API.Changelog.md)

Defined in: [library/Extract.ts:70](https://github.com/gocom/changelog/blob/078cc03e022b1a9086bbe9394e218be553d83c7c/src/library/Extract.ts#L70)

Extracts the specified version from the given changelog.

The function would extract the specified [ExtractOptions.version](../Options/API.ExtractOptions.md#version) from the given Markdown based
changelog provided with the [ExtractOptions.contents](../Options/API.ExtractOptions.md#contents) option.

## Parameters

### options

[`ExtractOptions`](../Options/API.ExtractOptions.md)

Options.

## Returns

`undefined` \| [`Changelog`](../Types/API.Changelog.md)

Returns changelog for the version, or `undefined`, if the version could not
be found from the changelog, or the version number is not a valid semantic version number.

## Example

The following would extract version 0.2.0's notes from the given [ExtractOptions.contents](../Options/API.ExtractOptions.md#contents):
```ts
import {extract} from '@gocom/changelog';

const changelog = extract({
 version: '0.2.0',
 contents: `
# Changelog

## Version 1.3.0

* Change 1
* Change 2

## Version 0.2.0

* Change 1
* Change 2

## Version 0.1.0

* Initial release.
 `,
});
```
The `changelog` variable would contain [Changelog](../Types/API.Changelog.md) object with the details about the requested 0.2.0.
