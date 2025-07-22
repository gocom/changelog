[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / getRelease

# Type Alias: getRelease()

> **getRelease** = (`changelog`) => `undefined` \| [`Release`](../Types/API.Release.md)

Defined in: [library/Release.ts:41](https://github.com/gocom/changelog/blob/21d7e94d349fc49650b58fae1fc875c29931421f/src/library/Release.ts#L41)

Gets the given changelog as expanded release details.

Processes the given changelog and returns it with extended number of details. This function is internally also
used by [asReleaseNotes](API.asReleaseNotes.md) function to provide the template variables.

## Parameters

### changelog

[`Changelog`](../Types/API.Changelog.md)

The changelog to process.

## Returns

`undefined` \| [`Release`](../Types/API.Release.md)

Release details, or `undefined` if the given changelog is not valid.
