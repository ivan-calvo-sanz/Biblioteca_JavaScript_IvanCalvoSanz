// ***** VARIABLES *****
/*
    - js es Case Sensitive (sensible a mayúsculas y minúsculas)
    - js es de Tipado Dinamico, no es necesario declarar el tipo de una variable (como int, string, etc.), y su tipo puede cambiar durante la ejecución del programa
*/


// ***** TIPOS DE VARIABLES *****
/* var
    - Es variable GLOBAL, ÁMBITO DE GLOBAL (no respeta los bloques {}) 
    - Se puede redefinir y reasignar
*/
var nombre = "Iván";
var nombre = "Pedro"; // permitido
nombre = "Ana";       // permitido

/* let
    - Es variable LOCAL, ÁMBITO DE BLOQUE (solo existe dentro de {}).
    - Se puede reasignar, pero no redeclarar en el mismo bloque.
*/
let edad = 25;
edad = 26;     // ✅ permitido
// let edad = 30; // ❌ error (ya existe en el mismo bloque)

/* const
    - Se usa para valores que no cambian.
    - También tiene ámbito de bloque.
    - No se puede reasignar ni redeclarar.
*/
const PI = 3.1416;
//PI = 3.15; // ❌ error

/* 💡 Tipos de valores que pueden guardar:
    * Números: let x = 10;
    * Cadenas: let texto = "Hola";
    * Booleanos: let activo = true;
    * Objetos: let persona = { nombre: "Iván", edad: 30 };
    * Arrays: let colores = ["rojo", "verde", "azul"];
    * Undefined / null: valores “vacíos” o sin definir.
*/


// ***** CONCATENAR VARIABLES *****
/* +' '+ */
let nombre_v2 = 'Pedro';
let apellidos_v2 = 'Garcia Perez';
let nombreApellidos_v2 = nombre_v2 + ' ' + apellidos_v2 + '<br>';
document.writeln(nombreApellidos_v2);

/* .concat() */
let nombreApellidos_v3 = nombre_v2.concat(apellidos_v2);
document.writeln(nombreApellidos_v3);


// ***** EJEMPLOS *****
//let nombre='Pedro';
//nombre=500;
let _nombre = 'Tomas';
let $_nombre = 'Antonio';

let precio = 10.55;

let cantidad = 42;

let esVerdadero = true;

let esNulo = null;

let persona = { nombre: 'Juan', edad: 30 };
document.writeln(persona.edad);
