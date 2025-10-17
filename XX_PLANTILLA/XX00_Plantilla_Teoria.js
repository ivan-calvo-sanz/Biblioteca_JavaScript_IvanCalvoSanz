// ***** PLANTILLA *****

/*
    - Tipo de dato Compuesto
    - Estructura que almacena varios valores en una sola variable.
    - Cada valor se guarda en una posición (índice), que empieza en 0.
*/


/**** DECLARAR ARRAYS ****/
const frutas = ["manzana", "pera", "plátano"];
// Se pueden guardar valores de diferente tipo en cada posición
const diferentesTipos = [1, "Hola", ["A", "B", "C"]];
console.log(diferentesTipos[2][1]); // C


/**** PROPIEDADES ****
| Propiedad                   | Descripción                                                   | Ejemplo                                | Resultado                      |
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| length                      | Devuelve el número de elementos                               | ["a","b","c"].length                   | 3                              |
*/


/**** METODOS (DEL OBJETO) ****
| Método                      | Descripción                                                   | Ejemplo                                | Resultado                      |
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| 🔍 Búsqueda   
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |             
| indexOf()                   | Devuelve el índice del valor o `-1` si no existe              | ["a","b","c"].indexOf("b")             | 1                              |
| includes()                  | Comprueba si contiene un valor                                | ["a","b","c"].includes("d")            | false                          |
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| 🟩 Añadir / Quitar
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| push()                      | Añade al final                                                | arr.push("x")                          | Devuelve nueva longitud        |
| pop()                       | Elimina el último                                             | arr.pop()                              | Devuelve el elemento eliminado |
| unshift()                   | Añade al inicio                                               | arr.unshift("x")                       | Devuelve nueva longitud        |
| shift()                     | Elimina el primero                                            | arr.shift()                            | Devuelve el elemento eliminado |
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| ✂️ Modificar contenido 
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| splice()                    | Añade o elimina elementos en posiciones concretas             | arr.splice(1,1,"nuevo")                | Modifica el array              |
| slice()                     | Crea una **copia parcial** del array                          | [1,2,3,4].slice(1,3)                   | [2,3]                          |
| --------------------------- | ------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
*/

//**** forEach() ****
const a = [10, 20, 30];
a.forEach(e => console.log(e));
// Se le puede pasar el elemento e el indice i
a.forEach((e, i) => console.log(`${i} = ${e}`));



/**** METODOS (DEL PROTOTIPO) ****
| Método        | Descripción                                                               | Ejemplo                                | Resultado                      |
| ------------- | ------------------------------------------------------------------------- | -------------------------------------- | ------------------------------ |
| Array.of();   | Crea un nuevo array a partir de los valores pasados como argumentos       | const numeros = Array.of(10, 20, 30);  | [10, 20, 30]                   |
*/


/**** TIPOS Y CLASE ARRAY ****/
typeof []        // "object"
Array.isArray([]) // true

