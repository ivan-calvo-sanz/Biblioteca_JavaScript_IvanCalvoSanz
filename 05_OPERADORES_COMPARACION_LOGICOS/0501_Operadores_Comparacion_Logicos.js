// ***** OPERADORES DE COMPARACION *****

/* 
    Siempre devuelven un valor booleano
*/

/* Operadores de comparación básicos
| Operador | Significado                                   | Ejemplo     | Resultado   |
| -------- | --------------------------------------------- | ----------- | ---------   |
| ==       | Igual que (compara valor, no tipo)            | `5 == "5"`  | ✅ `true`  |
| ===      | Estrictamente igual (compara valor y tipo)    | `5 === "5"` | ❌ `false` |
| !=       | Distinto que (compara valor, no tipo)         | `5 != "5"`  | ❌ `false` |
| !==      | Estrictamente distinto (compara valor y tipo) | `5 !== "5"` | ✅ `true`  |
| >        | Mayor que                                     | `8 > 5`     | ✅ `true`  |
| <        | Menor que                                     | `3 < 5`     | ✅ `true`  |
| >=       | Mayor o igual que                             | `5 >= 5`    | ✅ `true`  |
| <=       | Menor o igual que                             | `4 <= 3`    | ❌ `false` |
*/


/* Con cadenas (strings)
    Las comparaciones de texto se hacen alfabéticamente (según Unicode):
*/
console.log("casa" > "barco"); // true (porque "c" va después de "b")


// OPERADORES LOGICOS
/*
| Operador | Nombre       | Ejemplo                                     | Resultado                      |
| -------- | ------------ | ------------------------------------------- | ------------------------------ |
| &&       | **AND** (y)  | `(edad > 18 && edad < 65)`                  | `true` si ambas son verdaderas |
| ||       | **OR** (o)   | `(dia === "sábado" \|\| dia === "domingo")` | `true` si una es verdadera     |
| !        | **NOT** (no) | `!true`                                     | `false`                        |
*/