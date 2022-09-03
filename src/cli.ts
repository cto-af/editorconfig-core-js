// tslint:disable:no-console
import { createCommand } from 'commander'

import * as editorconfig from './'

import pkg from '../package.json'

export default function cli(args: string[]) {
  const program = createCommand()

  program.version(
      'EditorConfig Node.js Core Version ' + pkg.version,
      '-v, --version',
      'Display version information'
    )
    .showHelpAfterError()
    .argument('<FILEPATH...>', 'Files to find configuration for.  Can be a hyphen (-) if you want path(s) to be read from stdin.')
    .option('-f <path>',       'Specify conf filename other than \'.editorconfig\'')
    .option('-b <version>',    'Specify version (used by devs to test compatibility)')
    .parse(args)

  const files = program.args
  const opts = program.opts()

  files
    .map((filePath) => editorconfig.parse(filePath, {
      config: opts.f,
      version: opts.b,
    }))
    .forEach((parsing, i, { length }) => {
      parsing.then((parsed) => {
        if (length > 1) {
          console.log(`[${files[i]}]`)
        }
        Object.keys(parsed).forEach((key) => {
          console.log(`${key}=${parsed[key]}`)
        })
      })
    })
}
