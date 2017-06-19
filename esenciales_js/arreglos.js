/**
 * Created by root on 19/06/17.
 */
var arr = [ 6, -23 , 12, 45, -9, 0, 1, 4, 99];

console.log("forEach()")
arr.forEach( (a, b ) => { console.log( b + " : " + a); });

console.log("Filter()")
arr.filter( item => item > 5).forEach( ( e, f ) =>  console.log(f + " : " + e) );

console.log("map()")
arr.map( item => item * item).filter( e => e > 2000).forEach( ( e, f ) =>  console.log(f + " : " + e) );

console.log("reduce()")
var valor = arr.map( item => item * item)
    .filter( e => e > 2000)
    .reduce( (acumulador, valorActual) => { return  acumulador + valorActual }, { valor:  0 });
console.log( "Reduccion: " + valor.toString() );