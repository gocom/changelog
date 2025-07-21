Changelog
=====

[![npm](https://img.shields.io/npm/v/%40gocom%2Fchangelog)](https://www.npmjs.com/package/@gocom/changelog) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gocom_changelog&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gocom_changelog) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gocom_changelog&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gocom_changelog) [![MIT](https://img.shields.io/badge/license-MIT-green)](https://github.com/gocom/changelog/blob/master/CONTRIBUTING.md) ![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)

Extract changelogs from CHANGELOG.md.

**Work in progress, not yet installable.**

⚡ Install
-----

Using npm:

```shell
$ npm install @gocom/changelog
```

📖 Documentation
-----

See [API Docs](https://github.com/gocom/changelog/blob/docs/master/Public/API.md).

📝 Example Usage
-----

### Parsing changelog

The following would parse the given changelog document string, and returns the results as an object:

```typescript
import {parse} from '@gocom/changelog';

const changelog = parse(`
# Changelog

### 1.1.0

* Change 1.
* Change 2.

### 1.0.0

* Change 1.
* Change 2.
`);
```

For more see [API documentation](https://github.com/gocom/changelog/blob/docs/master/Public/API.md).

🛠️ Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/changelog/blob/master/CONTRIBUTING.md).
