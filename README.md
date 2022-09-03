# EditorConfig JavaScript Core

[![Tests](https://github.com/cto-af/editorconfig-core-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/cto-af/editorconfig-core-js/actions/workflows/node.js.yml)

NOTE: This is currently a fork unauthorized by the EditorConfig team.  It
seems as if their JavaScript core is currently unmaintained.  As soon as that
situation is resolved, this fork will go away in favor of the original code.

The EditorConfig JavaScript core will provide the same functionality as the
[EditorConfig C Core][] and [EditorConfig Python Core][].


## Installation

You need [node][] to use this package.

To install the package locally:

```bash
$ npm install @cto.af/editorconfig
```

To install the package system-wide:

```bash
$ npm install -g @cto.af/editorconfig
```

## Usage

### in Node.js:

#### parse(filePath[, options])

options is an object with the following defaults:

```js
{
  config: '.editorconfig',
  version: pkg.version,
  root: '/'
};
```

Search for `.editorconfig` starting from the current directory to the root directory.

Example:

```js
const editorconfig = require('editorconfig');
const path = require('path');

const filePath = path.join(__dirname, 'sample.js');

(async () => {
  console.log(await editorconfig.parse(filePath));
})();
/*
  {
    indent_style: 'space',
    indent_size: 2,
    end_of_line: 'lf',
    charset: 'utf-8',
    trim_trailing_whitespace: true,
    insert_final_newline: true,
    tab_width: 2
  };
*/
```

#### parseSync(filePath[, options])

Synchronous version of `editorconfig.parse()`.

#### parseString(fileContent)

The `parse()` function above uses `parseString()` under the hood. If you have your file contents
just pass it to `parseString()` and it'll return the same results as `parse()`.

#### parseFromFiles(filePath, configs[, options])

options is an object with the following defaults:

```js
{
  config: '.editorconfig',
  version: pkg.version,
  root: '/'
};
```

Specify the `.editorconfig`.

Example:

```js
const editorconfig = require('editorconfig');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '.editorconfig');
const configs = [
  {
    name: configPath,
    contents: fs.readFileSync(configPath, 'utf8')
  }
];

const filePath = path.join(__dirname, '/sample.js');

(async () => {
  console.log(await editorconfig.parseFromFiles(filePath, configs))
})();
/*
  {
    indent_style: 'space',
    indent_size: 2,
    end_of_line: 'lf',
    charset: 'utf-8',
    trim_trailing_whitespace: true,
    insert_final_newline: true,
    tab_width: 2
  };
*/
```

#### parseFromFilesSync(filePath, configs[, options])

Synchronous version of `editorconfig.parseFromFiles()`.

### in Command Line

```bash
$ ./bin/editorconfig

Usage: editorconfig [options] <FILEPATH...>

Arguments:
  FILEPATH       Files to find configuration for.  Can be a hyphen (-) if you
                 want path(s) to be read from stdin.

Options:
  -v, --version  Display version information
  -f <path>      Specify conf filename other than '.editorconfig'
  -b <version>   Specify version (used by devs to test compatibility)
  -h, --help     display help for command
```

Example:

```bash
$ ./bin/editorconfig /home/zoidberg/humans/anatomy.md
charset=utf-8
insert_final_newline=true
end_of_line=lf
tab_width=8
trim_trailing_whitespace=sometimes
```

## Development

To install dependencies for this package run this in the package directory:

```bash
$ npm install
```

Next, run the following commands:

```bash
$ npm run build
$ npm link
```

The global editorconfig will now point to the files in your development
repository instead of a globally-installed version from npm. You can now use
editorconfig directly to test your changes.

If you ever update from the central repository and there are errors, it might
be because you are missing some dependencies. If that happens, just run npm
link again to get the latest dependencies.

To test the command line interface:

```bash
$ editorconfig <filepath>
```

# Testing

[CMake][] must be installed to run the tests.

To run the tests:

```bash
$ npm test
```

To run the tests with increased verbosity (for debugging test failures):

```bash
$ npm run-script test:ci
```

You make want to run the tests in parallel to radically speed up the process:

```bash
export CTEST_PARALLEL_LEVEL=16
```

[EditorConfig C Core]: https://github.com/editorconfig/editorconfig-core
[EditorConfig Python Core]: https://github.com/editorconfig/editorconfig-core-py
[node]: http://nodejs.org/
[cmake]: http://www.cmake.org
