/**
 * Created by root on 19/06/17.
 */
//1-Inmutabilidad

var a = [ 1 ,2 , 3, 4];

var b = a.map( item => item * item);

console.log( a, b );

//2-funciones como parametros, funciones que retornan funciones
// Reutilizacion de codigo

var suma = function ( a , b) {
    return a + b;
}

var suma2 = function ( a ) {
    return function ( b ) {
        return a + b ;
    }
}

var sumar10 = suma2( 10 );

var sumar11 = suma2( 11 );

console.log( suma( 2, 2) );

// Unicamente se manda un parametro a la funcion cuando se invoca, ya que en su declaracion esta ya puede o debe contener el otro parametro.
console.log( sumar10(7) );
console.log( sumar11(7) );

// 3- En la P.F siempre se debe devolver un valor
// el procedimiento de obtener la raiz cuadrada no es funcional ya que este puede retornar dos valores