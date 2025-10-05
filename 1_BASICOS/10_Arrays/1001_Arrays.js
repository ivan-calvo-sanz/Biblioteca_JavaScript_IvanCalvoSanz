// ***** ARRAYS *****

/*
    - Estructura que almacena varios valores en una sola variable.
    - Cada valor se guarda en una posición (índice), que empieza en 0.
*/


/**** CREAR ARRAYS ****/
let frutas = ["manzana", "pera", "plátano"];
// También se puede usar el constructor (menos habitual)
let colores = new Array("rojo", "verde", "azul");


/**** ACCEDER Y MODIFICAR ELEMENTOS ****/
console.log(frutas[0]); // "manzana"
frutas[1] = "uva";      // cambia "pera" por "uva"
console.log(frutas); // ["manzana", "uva", "plátano"]

/**** RECORRER UN ARRAY ****/
let numeros = [1, 2, 3, 4];
for (let n of numeros) {
  console.log(n); // 1, 2, 3, 4
}
//con .forEach():
numeros.forEach(n => console.log(n * 2)); // 2, 4, 6, 8


/**** METODOS ****
| Categoría                   | Método        | Descripción                                                   | Ejemplo                                | Resultado                      |
| --------------------------  | ------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| 📏 **Información**          | `length`      | Devuelve el número de elementos                               | `["a","b","c"].length`                 | `3`                            |
| 🔍 **Búsqueda**             | `indexOf()`   | Devuelve el índice del valor o `-1` si no existe              | `["a","b","c"].indexOf("b")`           | `1`                            |
|                             | `includes()`  | Comprueba si contiene un valor                                | `["a","b","c"].includes("d")`          | `false`                        |
| 🟩 **Añadir / Quitar**      | `push()`      | Añade al final                                                | `arr.push("x")`                        | Devuelve nueva longitud        |
|                             | `pop()`       | Elimina el último                                             | `arr.pop()`                            | Devuelve el elemento eliminado |
|                             | `unshift()`   | Añade al inicio                                               | `arr.unshift("x")`                     | Devuelve nueva longitud        |
|                             | `shift()`     | Elimina el primero                                            | `arr.shift()`                          | Devuelve el elemento eliminado |
| ✂️ **Modificar contenido** | `splice()`    | Añade o elimina elementos en posiciones concretas             | `arr.splice(1,1,"nuevo")`              | Modifica el array              |
|                             | `slice()`     | Crea una **copia parcial** del array                          | `[1,2,3,4].slice(1,3)`                 | `[2,3]`                        |
| 🔁 **Recorrer**            | `forEach()`   | Ejecuta una función por cada elemento                         | `[1,2,3].forEach(n => console.log(n))` | Imprime 1,2,3                  |
| 🧩 **Transformar**         | `map()`       | Crea un **nuevo array** aplicando una función a cada elemento | `[1,2,3].map(n => n*2)`                | `[2,4,6]`                      |
| ⚙️ **Filtrar**             | `filter()`    | Crea un nuevo array con los que cumplen una condición         | `[1,2,3,4].filter(n=>n%2===0)`         | `[2,4]`                        |
| 🔢 **Reducir**             | `reduce()`    | Acumula todos los valores en uno solo                         | `[1,2,3].reduce((a,b)=>a+b,0)`         | `6`                            |
| 🔄 **Invertir / Ordenar**  | `reverse()`   | Invierte el orden                                             | `[1,2,3].reverse()`                    | `[3,2,1]`                      |
|                             | `sort()`      | Ordena (alfabéticamente o con función)                        | `[3,1,2].sort()`                       | `[1,2,3]`                      |
| 🔗 **Unir / Separar**      | `join()`      | Une todos los elementos en un string                          | `["a","b","c"].join("-")`              | `"a-b-c"`                      |
|                             | `concat()`    | Une arrays                                                    | `[1,2].concat([3,4])`                  | `[1,2,3,4]`                    |
| 🧱 **Otros útiles**        | `find()`      | Devuelve el **primer elemento** que cumple una condición      | `[5,12,8].find(n=>n>10)`               | `12`                           |
|                            | `findIndex()` | Devuelve el **índice** del primero que cumple la condición    | `[5,12,8].findIndex(n=>n>10)`          | `1`                            |
|                            | `every()`     | Comprueba si **todos** cumplen la condición                   | `[1,2,3].every(n=>n>0)`                | `true`                         |
|                            | `some()`      | Comprueba si **alguno** cumple la condición                   | `[1,2,3].some(n=>n>2)`                 | `true`                         |
|                            | `flat()`      | Aplana arrays anidados                                        | `[1,[2,3]].flat()`                     | `[1,2,3]`                      |
|                            | `flatMap()`   | Aplica `map()` y luego aplana el resultado                    | `[1,2].flatMap(n=>[n,n*2])`            | `[1,2,2,4]`                    |
*/

// Añadir-eliminar elementos
let numeros_V2 = [1, 2, 3];
numeros_V2.push(4);    // añade al final → [1, 2, 3, 4]
numeros_V2.pop();      // elimina el último → [1, 2, 3]
numeros_V2.unshift(0); // añade al inicio → [0, 1, 2, 3]
numeros_V2.shift();    // elimina el primero → [1, 2, 3]

// Buscar dentro de un array
let frutas_V2 = ["manzana", "pera", "plátano"];
frutas_V2.indexOf("pera");   // 1
frutas_V2.includes("uva");   // false


let nums = [1, 2, 3, 4];
let dobles = nums.map(n => n * 2);      // [2, 4, 6, 8]
let pares = nums.filter(n => n % 2 === 0); // [2, 4]
let suma = nums.reduce((a, b) => a + b, 0); // 10

/**** TIPOS Y CLASE ARRAY ****/
typeof []        // "object"
Array.isArray([]) // true



