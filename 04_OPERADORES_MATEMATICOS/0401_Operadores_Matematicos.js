// ***** OPERADORES MATEMATICOS *****

/* Operadores básicos
| Operador | Descripción                   | Ejemplo  | Resultado |
| -------- | ----------------------------- | -------- | --------- |
| +        | Suma                          | `5 + 3`  | `8`       |
| -        | Resta                         | `5 - 3`  | `2`       |
| *        | Multiplicación                | `5 * 3`  | `15`      |
| /        | División                      | `10 / 2` | `5`       |
| %        | Módulo (resto de la división) | `10 % 3` | `1`       |
| **       | Exponente                     | `2 ** 3` | `8`       |
*/


/* Incremento y decremento
| Operador | Significado     | Ejemplo       | Resultado          |
| -------- | --------------- | ------------- | ------------------ |
| `++`     | Incrementa en 1 | `x++` o `++x` | Aumenta el valor   |
| `--`     | Decrementa en 1 | `x--` o `--x` | Disminuye el valor |
*/
// Diferencia entre prefijo y sufijo:
let x = 5;
console.log(++x); // 6 (primero suma, luego muestra)
console.log(x++); // 6 (muestra, luego suma)
console.log(x);   // 7


/* Operadores combinados
| Operador | Equivale a   | Ejemplo   | Resultado           |
| -------- | ------------ | --------- | ------------------- |
| `+=`     | `x = x + y`  | `x += 3`  | Suma 3 a x          |
| `-=`     | `x = x - y`  | `x -= 2`  | Resta 2 a x         |
| `*=`     | `x = x * y`  | `x *= 4`  | Multiplica x por 4  |
| `/=`     | `x = x / y`  | `x /= 2`  | Divide x entre 2    |
| `%=`     | `x = x % y`  | `x %= 5`  | Guarda el resto     |
| `**=`    | `x = x ** y` | `x **= 2` | Eleva x al cuadrado |
*/

let a = 10;
let b = 3;

console.log("Suma:", a + b);            // Suma: 13
console.log("Resta:", a - b);           // Resta: 7
console.log("Multiplicación:", a * b);  // Multiplicación: 30
console.log("División:", a / b);        // División: 3.3333333333333335
console.log("Módulo:", a % b);          // Módulo: 1
console.log("Potencia:", a ** b);       // Potencia: 1000
