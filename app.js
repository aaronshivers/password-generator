const yargs = require('yargs')
const generator = require('./generator')

// set generator options
const generatorOptions = {
  alias: 'g',
  demand: true,
  describe: 'generator info',
}

// create commands
const argv = yargs
  .scriptName('Password Generator')
  .usage('$0 <cmd> [args]')
  .command('generate', 'generate password', {
    generate: { generatorOptions },
  })
  .help()
  .example('$0 -g', 'generate password')
  .argv

// get argument from cli
const command = argv._[0]

if (command === 'generate') {
  const password = generator.generatePassword()
  console.log(password)
} else {
  console.log('Command not Recognized')
}
