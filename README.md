Changelog
=====

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gocom_changelog&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gocom_changelog) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=gocom_changelog&metric=coverage)](https://sonarcloud.io/summary/new_code?id=gocom_changelog) [![MIT](https://img.shields.io/badge/license-MIT-green)](https://github.com/gocom/changelog/blob/main/LICENSE) ![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)

Extract version changelogs from CHANGELOG.md. The library enables parsing Markdown formatted changelog documents,
and extracting details and release notes from the contents. Written in TypeScript, and supports both client-side
web browser and Node.js backend usage.

**Work in progress, not yet installable.**

⚡ Install
-----

Using npm:

```shell
$ npm install @gocom/changelog
```

📖 Documentation
-----

See [API Docs](https://github.com/gocom/changelog/blob/docs/main/Public/API.md).

📝 Example Usage
-----

### Parsing changelog

The following would parse the given changelog document string, and returns the results as an array of objects:

```typescript
import {parse} from '@gocom/changelog';

const changelog = parse(`
# Changelog

### 1.1.0-alpha.1

* Change 1.
* Change 2.

### 1.0.0 🚀

* Initial public release.
`);
```

The above `changelog` variable would become:

```typescript
[
  {
    version: '1.1.0-alpha.1',
    isPrerelease: true,
    titleStart: '',
    titleEnd: '',
    notes: '* Change 1.\n* Change 2.'
  },
  {
    version: '1.0.0',
    isPrerelease: false,
    titleStart: '',
    titleEnd: '🚀',
    notes: '* Initial public release.'
  }
];
```

For more see [documentation](https://github.com/gocom/changelog/blob/docs/main/Public/API.md).

🛠️ Development
-----

See [CONTRIBUTING.md](https://github.com/gocom/changelog/blob/main/CONTRIBUTING.md).
