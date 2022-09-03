## Major

- Update dependencies
- Tweak build process so that it runs with current-version dependencies
- Update to support latest Commander version
- Create a [Peggy](https://peggyjs.org/)-based grammar
- Update to the latest test suite
- Passes 100% of test suite tests on Linux, Mac, and Windows
- Move from Travis (hasn't worked in a year) to GitHub Actions
- Test on node 12,14,16,18, on all supported platforms
- Manual tests pass on node 8 Linux, but build-time dependencies no longer support pre-node 12, so added engines to package.json for the tested versions only
- Simplify project structure and build process

## 0.15.3
- Move @types dependencies to dev dependencies.
- Upgrade dependencies.

## 0.15.2
- Fix publish.

## 0.15.1
- Update dependencies.

## 0.15.0
- Convert source code into TypeScript. Generated type definitions are now provided.
- Remove dependency on Bluebird.
- **Breaking**: Node v4 no longer supported.
