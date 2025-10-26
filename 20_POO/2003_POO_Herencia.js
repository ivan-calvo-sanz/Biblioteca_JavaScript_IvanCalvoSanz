// ***** POO HERENCIA *****


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

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad); // llama al constructor de Persona
    this.curso = curso;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}.`);
  }
}

const alumno1 = new Estudiante("Lucía", 22, "JavaScript");
alumno1.saludar();  // método heredado    Hola, me llamo Lucía y tengo 22 años.
alumno1.estudiar(); // método propio      Lucía está estudiando JavaScript.


