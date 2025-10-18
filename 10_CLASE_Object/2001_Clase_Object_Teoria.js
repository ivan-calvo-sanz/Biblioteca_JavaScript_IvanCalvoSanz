// ***** CLASE Object *****

/*
    - Es la Clase base de todos los Objetos de js.
    - Cualquier cosa que sea un objeto (arrays, funciones, fechas, clases personalizadas...) hereda de Object.
    - Cada clave (propiedad) tiene un valor, que puede ser un número, texto, función, otro objeto, etc.
    - Las propiedades pueden accederse con punto (obj.propiedad) o con corchetes (obj["propiedad"]).
*/

const persona = { nombre: "Iván", edad: 30 };

console.log(typeof persona); // "object"
console.log(persona instanceof Object); // true



/**** METODOS ESTATICOS ****
| Método                       | Descripción                                                  | Ejemplo                                                          |
| ---------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| **Object.keys(obj)**         | Devuelve un array con las claves del objeto.                 | `Object.keys(persona)` → `["nombre", "edad"]`                    |
| **Object.values(obj)**       | Devuelve un array con los valores del objeto.                | `Object.values(persona)` → `["Iván", 30]`                        |
| **Object.entries(obj)**      | Devuelve pares `[clave, valor]`.                             | `Object.entries(persona)` → `[["nombre", "Iván"], ["edad", 30]]` |
| **Object.assign(dest, src)** | Copia propiedades de un objeto a otro.                       | `Object.assign({}, persona)`                                     |
| **Object.freeze(obj)**       | Congela un objeto (no se puede modificar).                   | `Object.freeze(persona)`                                         |
| **Object.seal(obj)**         | Sella un objeto (no se pueden añadir ni borrar propiedades). | `Object.seal(persona)`                                           |
| **Object.create(proto)**     | Crea un nuevo objeto con un prototipo dado.                  | `Object.create(null)`                                            |
| **Object.hasOwn(obj, prop)** | Comprueba si una propiedad es directa del objeto.            | `Object.hasOwn(persona, "edad")` → `true`                        |
*/


/**** METODOS DE INSTANCIA ****
| Método                             | Descripción                                        | Ejemplo                                  |
| ---------------------------------- | -------------------------------------------------- | ---------------------------------------- |
| **obj.hasOwnProperty(prop)**       | Comprueba si el objeto tiene una propiedad propia. | `persona.hasOwnProperty("nombre")`       |
| **obj.toString()**                 | Devuelve una representación en texto.              | `persona.toString()`                     |
| **obj.valueOf()**                  | Devuelve el valor primitivo del objeto.            | `persona.valueOf()`                      |
| **obj.propertyIsEnumerable(prop)** | Indica si una propiedad puede iterarse.            | `persona.propertyIsEnumerable("nombre")` |
*/


/**** TODO HEREDA DE Object ****/
let fecha = new Date();
let numeros = [1, 2, 3];
let texto = new String("Hola");
class Persona {}
let p = new Persona();

console.log(fecha instanceof Object);   // true
console.log(numeros instanceof Object); // true
console.log(texto instanceof Object);   // true
console.log(p instanceof Object);       // true

