/**
 * Created by root on 19/06/17.
 */
var x = function (a, b) {
    c = a * b;
    return c;
}

y = x( 3 , 5);

console.log( "Resultado: " + y );

var z = ( a, b ) => a * b;

console.log("Resultado flecha:" + z( 3, 5 ) );