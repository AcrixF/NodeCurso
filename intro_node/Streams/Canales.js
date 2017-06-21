/**
 * Created by root on 21/06/17.
 */
const fs = require('fs');

/*
const file = fs.createWriteStream('./intro_node/Streams/');

file.write('Hello, ');

file.end('world!');
 */

const readable = fs.createReadStream('./intro_node/Streams/texto.txt');

readable.on('data', ( chunk ) => {
   console.log(`Received ${chunk.length} bytes of data`);
   console.log( chunk )
   readable.pause();

   console.log(`There will be not additional data for 1.5 seconds`);
   setTimeout(()=>{ console.log('Now data will start flowing again...'); readable.resume() }, 4000);
});

readable.on('end', () => console.log('Finalizó la lectura del canal'));

readable.on('close', () => console.log("Cerrando canal"));

