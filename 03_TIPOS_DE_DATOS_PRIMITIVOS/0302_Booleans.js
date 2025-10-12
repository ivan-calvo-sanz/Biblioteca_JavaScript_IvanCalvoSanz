// ***** Booleans *****




/* VALORES QUE TIENDEN A FALSE
(El resto de valores tienden a VERDADERO)
| Valor       | Tipo         | Resultado booleano |
| ----------- | ------------ | ------------------ |
| false       | Boolean      | false              |
| 0           | Number       | false              |
| "" o ''     | String vacío | false              |
| null        | Null         | false              |
| undefined   | Undefined    | false              |
| NaN         | Number       | false              |
*/
if (false);                     // Tiende a false
if (null);                      // Tiende a false
if (undefined);                 // Tiende a false
if (0);                         // Tiende a false
if (NaN);                       // Tiende a false
if ('');                        // Tiende a false
if ("");                        // Tiende a false


/* VALORES QUE TIENDEN A TRUE -> Truthy */
if (true);
if ({});            // Objeto vacio tiende a VERDADERO
if ([]);            // Array vacio tiende a VERDADERO
if (42);            // Numero tiende a VERDADERO
if ("prueba");      // Cadena de texto tiende a VERDADERO
if (new Date());    // Una fecha tiende a VERDADERO
if (-42);           // Un numero negativo tiende a VERDADERO
if (3.14);          // Un numero decimal tiende a VERDADERO
if (-3.14);         // Un numero decimal negativo tiende a VERDADERO
if (Infinity);      // tiende a VERDADERO
if (-Infinity);     // tiende a VERDADERO





