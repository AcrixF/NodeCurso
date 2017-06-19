/**
 * Created by root on 19/06/17.
 */

var Objeto = function () {

};

Objeto.prototype.Saludar = function ( msg , callback ) {
    console.log( "Saludo: " + msg );

    if(typeof callback == 'function') {
        callback();
    }else{
        console.log("Callback no es una funcion idiota!")
    }
}


var o = new Objeto();

o.Saludar("Hola Mundo", 5);
/*
o.Saludar( "Hola mundo" , function () {
    console.log( "Callback Ejecutando");
});

Objeto.prototype.Despedirce = function () {
    console.log("Adios");
}

o.Despedirce();

*/