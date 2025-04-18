import { makeKarmaConfigurator } from '@fpjs-incubator/broyster/node'

module.exports = makeKarmaConfigurator({
  projectName: 'FingerprintJS',
  includeFiles: ['src/**/*.ts', 'tests/**/*.ts', 'dist/print.min.js'],
})
