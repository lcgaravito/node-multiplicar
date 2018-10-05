// const multiplicar = require('./multiplicar/multiplicar.js'); // Ya se sabe que debe ser .js
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + `${archivo}`.green)) // var colors = require('colors/safe');
            .catch(err => console.log(err)); // console.log(colors.green('hello'));
        break;
    default:
        console.log('Comando no reconocido');
}

// let parametro = argv[2];

// // let base = 'abc';
// let base = parametro.split('=')[1];