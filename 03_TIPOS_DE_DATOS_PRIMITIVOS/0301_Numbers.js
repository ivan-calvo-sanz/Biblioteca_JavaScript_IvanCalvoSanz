// ***** Numbers *****

/*
    - Son un tipo de dato primitivo que representa tanto enteros como decimales (punto flotante).
    - En JavaScript no existe un tipo separado para enteros y flotantes, todos son del tipo number.
*/

let entero = 10;
let decimal = 3.14;
let negativo = -5;


/* PROPIEDADES
| Tipo         | Nombre                     | Descripción                | Ejemplo                                 | Resultado                 |
| ------------ | -------------------------- | -------------------------- | --------------------------------------- | ------------------------- |
| Propiedad    | `Number.MAX_VALUE`         | Valor máximo representable | `console.log(Number.MAX_VALUE)`         | `1.7976931348623157e+308` |
| Propiedad    | `Number.MIN_VALUE`         | Valor positivo más pequeño | `console.log(Number.MIN_VALUE)`         | `5e-324`                  |
| Propiedad    | `Number.POSITIVE_INFINITY` | Infinito positivo          | `console.log(Number.POSITIVE_INFINITY)` | `Infinity`                |
| Propiedad    | `Number.NEGATIVE_INFINITY` | Infinito negativo          | `console.log(Number.NEGATIVE_INFINITY)` | `-Infinity`               |
| Propiedad    | `Number.NaN`               | Representa “Not a Number”  | `console.log(Number.NaN)`               | `NaN`                     |
*/

/* METODOS DEL OBJETO
| Método                      | Descripción                      | Ejemplo                      | Resultado |
| --------------------------- | -------------------------------- | ---------------------------- | --------- |
| `Number.isInteger(valor)`   | Comprueba si es entero           | `Number.isInteger(10.5)`     | `false`   |
| `Number.isNaN(valor)`       | Comprueba si es NaN              | `Number.isNaN(NaN)`          | `true`    |
| `Number.parseInt(cadena)`   | Convierte texto a entero         | `Number.parseInt("42px")`    | `42`      |
| `Number.parseFloat(cadena)` | Convierte texto a decimal        | `Number.parseFloat("3.14m")` | `3.14`    |
| `Number.isFinite(valor)`    | Comprueba si es un número finito | `Number.isFinite(10 / 0)`    | `false`   |
*/
// NO es necesario indicar el OJETO Number antes del Método
let c = 7.19;
let d = "5.6";
console.log(c + d);                 // 7.19 + "5.6" = 7.195.6
console.log(c + parseInt(d));       // 7.19 + 5     = 12.190000000001
console.log(c + parseFloat(d));     // 7.19 + 5.6   = 12.79


/* METODOS DEL PROTOTIPO
| Método              | Descripción                               | Ejemplo                    | Resultado   |
| ------------------- | ----------------------------------------- | -------------------------- | ----------- |
| `.toFixed(n)`       | Redondea a `n` decimales                  | `(3.14159).toFixed(2)`     | `"3.14"`    |
| `.toString()`       | Convierte a texto                         | `(123).toString()`         | `"123"`     |
| `.toExponential(n)` | Notación científica                       | `(1234).toExponential(2)`  | `"1.23e+3"` |
| `.toPrecision(n)`   | Ajusta el número de cifras significativas | `(3.14159).toPrecision(3)` | `"3.14"`    |
| `.valueOf()`        | Devuelve el valor primitivo del objeto    | `(42).valueOf()`           | `42`        |
*/
