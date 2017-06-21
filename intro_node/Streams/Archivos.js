/**
 * Created by root on 21/06/17.
 */

const fs = require('fs');

/* Se lee un archivo de manera sincrona
archivo = fs.readFileSync('./intro_node/Streams/texto.txt');
console.log( archivo );

var archivo;

fs.readFile('./intro_node/Streams/err.txt', (err, data ) => {
    archivo = data;
    console.log( err );
    console.log( archivo );
});
 */

const canal = fs.createWriteStream('./intro_node/Streams/escritura.txt', {
    flags: 'r+',
    start: 4
});

canal.write( 'abcdefghi' );

canal.end();
