// ***** POO ENCAPSULACION *****

/*
  - Consiste en ocultar datos internos del objeto. (#propiedad)
*/


/**** EJEMPLO ****/
class Cuenta {
  #saldo = 0;

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  verSaldo() {
    console.log(`Saldo actual: ${this.#saldo}€`);
  }
}


const cuenta1 = new Cuenta();
// Intentar acceder a cuenta1.#saldo → ❌ error.

cuenta1.depositar(100);
cuenta1.verSaldo(); // Saldo actual: 100€



