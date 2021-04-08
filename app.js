const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

// option('l')
// listar boolean
// default false


console.clear();

//console.log(process.argv);
// const [,,arg3='base=5'] = process.argv;
// const [, base= 5] = arg3.split('=')

//console.log(process.argv);
//console.log(argv)

console.log('base', argv.base);


crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err))


