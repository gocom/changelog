[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / parse

# Function: parse()

> **parse**(`contents`): [`Changelog`](../Types/API.Changelog.md)[]

Defined in: [library/Parser.ts:51](https://github.com/gocom/changelog/blob/db749aeb3b7fa142eb99a35449a056a38ba2e6fc/src/library/Parser.ts#L51)

Parses the given changelog document content.

## Parameters

### contents

`string`

Markdown changelog contents

## Returns

[`Changelog`](../Types/API.Changelog.md)[]

Returns an array of changes per version.
