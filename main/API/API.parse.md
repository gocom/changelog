[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / parse

# Function: parse()

> **parse**(`contents`): [`Changelog`](../Types/API.Changelog.md)[]

Defined in: [library/Parser.ts:51](https://github.com/gocom/changelog/blob/dfbd85c4c9fd82309397c2119164c582a7910c7e/src/library/Parser.ts#L51)

Parses the given changelog document content.

## Parameters

### contents

`string`

Markdown changelog contents

## Returns

[`Changelog`](../Types/API.Changelog.md)[]

Returns an array of changes per version.
