// ***** POO HERENCIA POLIMORFISMO *****
/*
  - Permite redefinir métodos heredados con un comportamiento distinto.
*/

/**** EJEMPLO ****/
class Animal {
  hablar() {
    console.log("El animal hace un sonido");
  }
}

class Perro extends Animal {
  hablar() {
    console.log("El perro ladra");
  }
}

let perro = new Perro();
perro.hablar(); // El perro ladra

