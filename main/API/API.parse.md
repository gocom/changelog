[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / parse

# Function: parse()

> **parse**(`contents`): [`Changelog`](../Types/API.Changelog.md)[]

Defined in: [library/Parser.ts:49](https://github.com/gocom/changelog/blob/21d7e94d349fc49650b58fae1fc875c29931421f/src/library/Parser.ts#L49)

Parses the given changelog document content.

## Parameters

### contents

`string`

Markdown changelog contents

## Returns

[`Changelog`](../Types/API.Changelog.md)[]

Returns an array of changes per version.
