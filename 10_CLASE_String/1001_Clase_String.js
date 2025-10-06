// ***** CLASE String *****

/*
    - Pueden ir entre comillas simples ' ', dobles " ", o invertidas ` ` (backticks).
    - Las comillas invertidas (`) permiten interpolación (${variable}) y texto en varias líneas
*/
let nombre = "Iván";
let apellido = 'Calvo';
let edad = 30;
let saludo = `Hola, ${nombre} ${apellido},
tienes ${edad} años.`; // Template literal

/* PROPIEDADES
| Propiedad | Descripción           | Ejemplo         | Resultado |
| --------- | --------------------- | --------------- | --------- |
| `.length` | Longitud de la cadena | `"Hola".length` | `4`       |
*/

/* METODOS
| Método                    | Descripción                             | Ejemplo                          | Resultado      |
| ------------------------- | --------------------------------------- | -------------------------------- | -------------- |
| `.toUpperCase()`          | Convierte a mayúsculas                  | `"hola".toUpperCase()`           | `"HOLA"`       |
| `.toLowerCase()`          | Convierte a minúsculas                  | `"HOLA".toLowerCase()`           | `"hola"`       |
| `.charAt(i)`              | Devuelve el carácter en la posición `i` | `"Java".charAt(1)`               | `"a"`          |
| `.indexOf("texto")`       | Busca la posición de un texto           | `"JavaScript".indexOf("Script")` | `4`            |
| `.includes("texto")`      | Comprueba si contiene el texto          | `"Hola mundo".includes("Hola")`  | `true`         |
| `.startsWith("texto")`    | Empieza con...                          | `"Hola".startsWith("Ho")`        | `true`         |
| `.endsWith("texto")`      | Termina con...                          | `"Hola".endsWith("la")`          | `true`         |
| `.slice(inicio, fin)`     | Extrae parte de la cadena               | `"JavaScript".slice(0,4)`        | `"Java"`       |
| `.substring(inicio, fin)` | Similar a `.slice()`                    | `"Hola".substring(1,3)`          | `"ol"`         |
| `.replace("a","e")`       | Sustituye texto (solo el primero)       | `"casa".replace("a","e")`        | `"cesa"`       |
| `.replaceAll("a","e")`    | Sustituye todos                         | `"casa".replaceAll("a","e")`     | `"cese"`       |
| `.trim()`                 | Elimina espacios al inicio y final      | `"  hola  ".trim()`              | `"hola"`       |
| `.concat()`               | Une cadenas                             | `"Hola".concat(" ", "Mundo")`    | `"Hola Mundo"` |
| `+`                       | También une cadenas                     | `"Hola " + "Mundo"`              | `"Hola Mundo"` |
*/
