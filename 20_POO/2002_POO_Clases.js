// ***** POO CLASES *****

/*
| Concepto        | Qué es                                    | Ejemplo                             |
| --------------- | ----------------------------------------- | ----------------------------------- |
| Clase           | Plantilla o modelo para crear objetos     | class Persona { ... }               |
| Objeto          | Instancia concreta de una clase           | const p1 = new Persona();           |
| Propiedades     | Atributos del objeto                      | this.nombre = "Iván"                |
| Métodos         | Acciones o comportamientos                | hablar() { ... }                    |
| Constructor     | Función especial para inicializar objetos | constructor(nombre) { ... }         |
| Herencia        | Una clase puede heredar de otra           | class Estudiante extends Persona {} |
*/

/**** EJEMPLO ****/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Iván", 30);
persona1.saludar();

