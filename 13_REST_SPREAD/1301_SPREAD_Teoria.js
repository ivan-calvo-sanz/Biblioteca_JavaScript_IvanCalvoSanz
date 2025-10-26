// ***** OPERADOR SPREAD *****

/*
    - SE UTILIZAN EN LOS PARAMETROS DE UNA FUNCION
    - Expande un array, objeto, String en valores individuales
*/

/**** SPREAD CON ARRAYS ****/
const numeros = [1, 2, 3];
console.log(...numeros); // 1 2 3

// se pueden copiar Arrays
// Se crea una copia independiente, no una referencia al mismo array.
const original = [10, 20, 30];
const copia = [...original];

copia.push(40);

console.log(original); // [10, 20, 30]
console.log(copia);    // [10, 20, 30, 40]

// Combinar arrays
const pares = [2, 4, 6];
const impares = [1, 3, 5];
const num = [...pares, ...impares];

console.log(num); // [2, 4, 6, 1, 3, 5]



/**** SPREAD EN FUNCIONES ****/
// Permite pasar los elementos de un array como argumentos individuales a una función
function sumar(a, b, c) {
  return a + b + c;
}

const valores = [5, 10, 15];
console.log(sumar(...valores)); // 30



/**** SPREAD EN String ****/
// Convierte una cadena en un array de caracteres
const palabra = "Hola";
const letras = [...palabra];
console.log(letras); // ['H', 'o', 'l', 'a']



/**** SPREAD EN OBJETOS ****/
// Se usa para copiar o combinar objetos
const persona = {
  nombre: "Iván",
  edad: 30
};
const direccion = {
  ciudad: "Valladolid",
  pais: "España"
};

const usuario = { ...persona, ...direccion };
console.log(usuario);
// { nombre: "Iván", edad: 30, ciudad: "Valladolid", pais: "España" }







