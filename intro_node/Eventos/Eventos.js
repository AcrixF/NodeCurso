/**
 * Created by root on 20/06/17.
 */
const Eventos = require('events');

class Carro extends Eventos{
     constructor(){
        super();
        this.contador = 0;
    }

     Arrancar(){
        console.log('El auto arranca');
        this.emit('arranco', this.contador);
        this.contador += 1;
    }
}


var carro = new Carro();

carro.on('arranco',  c  => console.log(c,'Evento escuchado'));

carro.Arrancar();
carro.Arrancar();
carro.Arrancar();
carro.Arrancar();