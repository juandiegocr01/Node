const argv = require('yargs')
.option('b', {
  alias: 'base',
  type:'number',
  demandOption: true,
  describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
  alias: 'listar',
  type: 'boolean',
  default: false,
  describe: 'Es opcional para imprimir la tabla o no por consola'
})
.option('h', {
    alias: 'hasta',
    type:'number',
    demandOption: true,
    describe:'Es el número hasta donde se desea realizar la tabla de multiplicar'
})
.check((argv, options) =>{
  if(isNaN(argv.base)){
    throw 'La base tiene que ser un número'
  }
  return true;
})
.argv;


module.exports = argv;