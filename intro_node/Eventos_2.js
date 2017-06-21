/**
 * Created by root on 20/06/17.
 */
const EventEmmiter = require('events');

class MyEmitter extends  EventEmmiter{}

const myEmitter = new MyEmitter();

/*
myEmitter.on( 'event', () => { console.log('An event ocurred!')});

myEmitter.emit('event');


//Asynchronously
myEmitter.on('event', (a, b) => {
    setImmediate( () => console.log(a, b, 'This happens asynchronously'));
});

//Arrow Declaration
myEmitter.on('event', (a, b) => console.log( a, b, this));

//Function Declaration
myEmitter.on('event',  (a, b) => {
    console.log(a, b, this);
});

myEmitter.on('event', (a, b, c) =>  {
    console.log(a, b, c, this);
});

let m = 0;

myEmitter.on('event', () => {
    console.log( ++m );
})

//Se ejecuta el evento
myEmitter.emit('event', 'a', 'b','c');

myEmitter.emit('event', 'a', 'b');

myEmitter.emit('event', 'a', 'b');


myEmitter.emit('uncaughtException', error => console.log('Whoops! there was an error!'));

myEmitter.emit('error', new Error('Whoops!'));

//Se añade la forma de validar y atrapar las excepciones
myEmitter.on('error', err => console.log('Whoops! there was an error!'));

myEmitter.emit('error', new Error('Whoops!'));

 */

myEmitter.once('newListerner', (event, listener) => {
   if (event === 'event'){
       myEmitter.on('event', () => { console.log('B'); });
   }
});

myEmitter.on('event', () => console.log('A'));

myEmitter.emit('event');