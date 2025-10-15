# Changelog

The changelog will also contain upcoming versions. Refer to tags, GitHub releases or npm registry for the latest
release.

## 0.1.0-alpha.6

* No code changes, testing trusted publishing from CI.

## 0.1.0-alpha.5

* No code changes, testing trusted publishing from CI.

## 0.1.0-alpha.4

* Fix `getRelease` and `asReleaseNotes` exports. They were accidentally exported as only types.

## 0.1.0-alpha.3

* Option to pass custom template variables to `asReleaseNotes`.

## 0.1.0-alpha.2

* Pick up version numbers from one same heading level. Before parsing changelog document, find the first version number
  heading from the document, and check what heading level it is (h1 - h6). After this, look for all the available
  version headings of the same heading level. This allows changelog authors to include version numbers in subheadings,
  without them ending up being pick up as a changelog version heading.

## 0.1.0-alpha.1

* First alpha release.
