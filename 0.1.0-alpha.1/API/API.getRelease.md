[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / getRelease

# Type Alias: getRelease()

> **getRelease** = (`changelog`) => `undefined` \| [`Release`](../Types/API.Release.md)

Defined in: [library/Release.ts:64](https://github.com/gocom/changelog/blob/1894cf52b580ae6d25ac0693a4276a3bb2024cf9/src/library/Release.ts#L64)

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

## Example

Takes the given [Changelog](../Types/API.Changelog.md) and returns [Release](../Types/API.Release.md) object:
```ts
import {getRelease} from '@gocom/changelog';

const release = getRelease({
 version: '2.3.5',
 notes: '* Change.',
});
```
The above `release` would become:
```ts
export {
 isPrerelease: false,
 build: undefined,
 major: 2,
 minor: 3,
 notes: '* Change.',
 patch: 5,
 prerelease: undefined,
 version: '2.3.5',
};
```
