// ***** TEORIA OBJETO Math *****

/* 
    Math no se instancia (no se puede usar new Math())
    Es un objeto único, con propiedades y métodos estáticos que puedes usar directamente.
*/

/* Redondeos
| Función         | Descripción                    | Ejemplo           | Resultado |
| --------------- | ------------------------------ | ----------------- | --------- |
| `Math.round(x)` | Redondea al entero más cercano | `Math.round(4.6)` | `5`       |
| `Math.floor(x)` | Redondea hacia abajo           | `Math.floor(4.9)` | `4`       |
| `Math.ceil(x)`  | Redondea hacia arriba          | `Math.ceil(4.1)`  | `5`       |
| `Math.trunc(x)` | Elimina decimales              | `Math.trunc(4.9)` | `4`       |
*/
// maximo y minimo
console.log(Math.max(10,50,600,1,8));
console.log(Math.min(10,50,600,1,8));

/* Aleatorios
| Función                              | Descripción                               | Ejemplo                        | Resultado    |
| ------------------------------------ | ----------------------------------------- | ------------------------------ | ------------ |
| `Math.random()`                      | Devuelve número aleatorio entre `0` y `1` | `Math.random()`                | Ej: `0.3457` |
| **Número aleatorio en un rango:**    |                                           |                                |              |
| `Math.random() * (max - min) + min`  | Entre `min` y `max`                       | `Math.random() * (10 - 1) + 1` | `1–10`       |
| `Math.floor(Math.random() * 10) + 1` | Entero 1–10                               | Ej: `7`                        |              |
*/

/* Constantes matemáticas
| Constante    | Descripción     | Ejemplo      | Resultado            |
| ------------ | --------------- | ------------ | -------------------- |
| `Math.PI`    | Valor de π      | `Math.PI`    | `3.141592653589793`  |
| `Math.E`     | Número de Euler | `Math.E`     | `2.718281828459045`  |
| `Math.SQRT2` | √2              | `Math.SQRT2` | `1.4142135623730951` |
| `Math.LN2`   | logₑ(2)         | `Math.LN2`   | `0.6931471805599453` |
*/

/* Funciones básicas
| Función          | Descripción                 | Ejemplo          | Resultado |
| ---------------- | --------------------------- | ---------------- | --------- |
| `Math.abs(x)`    | Valor absoluto              | `Math.abs(-7)`   | `7`       |
| `Math.sqrt(x)`   | Raíz cuadrada               | `Math.sqrt(9)`   | `3`       |
| `Math.pow(x, y)` | Potencia (x^y)              | `Math.pow(2, 3)` | `8`       |
| `Math.cbrt(x)`   | Raíz cúbica                 | `Math.cbrt(8)`   | `2`       |
| `Math.sign(x)`   | Signo del número (-1, 0, 1) | `Math.sign(-5)`  | `-1`      |
*/

/* Trigonometría
| Función        | Descripción        | Ejemplo                       |
| -------------- | ------------------ | ----------------------------- |
| `Math.sin(x)`  | Seno (en radianes) | `Math.sin(Math.PI / 2)` → `1` |
| `Math.cos(x)`  | Coseno             | `Math.cos(0)` → `1`           |
| `Math.tan(x)`  | Tangente           | `Math.tan(Math.PI / 4)` → `1` |
| `Math.asin(x)` | Arcoseno           | `Math.asin(1)` → `1.5708 rad` |
| `Math.acos(x)` | Arcocoseno         | `Math.acos(0)` → `1.5708 rad` |
| `Math.atan(x)` | Arcotangente       | `Math.atan(1)` → `0.7854 rad` |
*/

