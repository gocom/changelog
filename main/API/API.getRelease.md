[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / getRelease

# Type Alias: getRelease()

> **getRelease** = (`changelog`) => [`Release`](../Types/API.Release.md)

Defined in: [library/Release.ts:41](https://github.com/gocom/changelog/blob/a821a646e6a7d9dede70692258a7056e2e656088/src/library/Release.ts#L41)

Gets the given changelog as expanded release details.

Processes the given changelog and returns it with extended number of details. This function is internally also
used by [asReleaseNotes](API.asReleaseNotes.md) function to provide the template variables.

## Parameters

### changelog

[`Changelog`](../Types/API.Changelog.md)

The changelog to process.

## Returns

[`Release`](../Types/API.Release.md)

Release details.
