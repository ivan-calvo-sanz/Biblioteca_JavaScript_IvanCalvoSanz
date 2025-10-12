// ***** null *****
/*
    - Representa la ausencia de valor. El programador lo usa para decir: “aquí no hay nada”
    - Se usa cuando quieres vaciar una variable o indicar que no hay ningún objeto asignado aún
*/
let x = null;
console.log(x); // null



// ***** undefined *****
/*
    - Significa que una variable existe pero no tiene valor asignado.
    - También lo devuelve una función que no tiene return.
*/
let y;
console.log(y); // undefined

function saludar() {
    console.log("Hola");
}
console.log(saludar()); // undefined


/*  DIFERENCIA ENTRE null y undefined
    En ambos casos significa que la variable está vacia sin embargo en null el programador lo declara intencionadamente como vacía con null
    mientras en undefined el programador no se lo ha indicado unicamente no se ha inicializado esa variable.
*/



// ***** NaN (Not a Number) *****
/*
    - Significa “NO ES UN NUMERO”
    - Aparece cuando una operación matemática no tiene sentido.
*/
console.log(0 / 0);           // NaN
console.log("hola" * 2);      // NaN
console.log(Number("abc"));   // NaN

// COMPROBAR SI ALGO ES NaN
console.log(isNaN("texto"));        // true
console.log(Number.isNaN("texto")); // false (más estricto)

