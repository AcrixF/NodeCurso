/**
 * Created by root on 20/06/17.
 */
var objeto = function () {}

objeto.prototype.Saludar = function ( msg ) {
    console.log( msg );
}

//Se añade la parte que nos permite exportar el objeto a traves de la palabra exports
module.exports = objeto;