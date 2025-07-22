[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / parse

# Function: parse()

> **parse**(`contents`): [`Changelog`](../Types/API.Changelog.md)[]

Defined in: [library/Parser.ts:49](https://github.com/gocom/changelog/blob/5d7ff763e9deecbf9d2eedbc66ef1099bf6b11d7/src/library/Parser.ts#L49)

Parses the given changelog document content.

## Parameters

### contents

`string`

Markdown changelog contents

## Returns

[`Changelog`](../Types/API.Changelog.md)[]

Returns an array of changes per version.
