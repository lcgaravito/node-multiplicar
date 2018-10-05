// Requireds
const fs = require('fs'); //Propio de Node
// const fs = require('express'); //No son nativos de Node
// const fs = require('./fs'); // Archivos nuestros
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('======================='.green);
    console.log(`Tabla del número ${base}`.green);
    console.log('======================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}', no es un número`);
            return;
        }
        let data = '';
        for (let i = 0; i < limite; i++) {
            data += (`${base} * ${i+1} = ${base*(i+1)}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}