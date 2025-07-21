[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / ParserOptions

# Interface: ParserOptions

Defined in: [types/Parser.ts:37](https://github.com/gocom/changelog/blob/dfbd85c4c9fd82309397c2119164c582a7910c7e/src/types/Parser.ts#L37)

Parser options.

Available options for [parse](../API/API.parse.md).

## Properties

### after?

> `optional` **after**: `string`

Defined in: [types/Parser.ts:53](https://github.com/gocom/changelog/blob/dfbd85c4c9fd82309397c2119164c582a7910c7e/src/types/Parser.ts#L53)

Contents to be appended to the extracted changelogs.

***

### before?

> `optional` **before**: `string`

Defined in: [types/Parser.ts:48](https://github.com/gocom/changelog/blob/dfbd85c4c9fd82309397c2119164c582a7910c7e/src/types/Parser.ts#L48)

Contents to be prepended to the extracted changelogs.

***

### version?

> `optional` **version**: `string`

Defined in: [types/Parser.ts:43](https://github.com/gocom/changelog/blob/dfbd85c4c9fd82309397c2119164c582a7910c7e/src/types/Parser.ts#L43)

Version to extract.

If not given, extracts the last version header from the CHANGELOG.md.
