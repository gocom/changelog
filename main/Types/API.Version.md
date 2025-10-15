[**@gocom/changelog**](../README.md)

***

[@gocom/changelog](../README.md) / [API](../Public/API.md) / Version

# Type Alias: Version

> **Version** = `string` \| `` `${number}.${number}.${number}` `` \| `` `${number}.${number}.${number}-${string}` `` \| `` `${number}.${number}.${number}+${string}` ``

Defined in: [types/Version.ts:44](https://github.com/gocom/changelog/blob/cc3b7d1c5efcd58c3abc117b9a9e3a34830f5b86/src/types/Version.ts#L44)

Version number.

The specified version number should follow semantic versioning rules.

## See

[Semantic Versioning](https://semver.org/)

## Example

Example values would include:
```
0.1.0
3.945.12
1.0.0-beta
1.0.0-alpha.1
1.0.0-rc.5
```
