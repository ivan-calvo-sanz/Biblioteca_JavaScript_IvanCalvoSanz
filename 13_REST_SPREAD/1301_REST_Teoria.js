// ***** PARAMETROS REST *****

/*
    - Permiten que una función reciba un número indefinido de argumentos Y LO CONVIERTE A un array.
    - Se declaran usando tres puntos ... delante del nombre del parámetro.
*/

/**** EJEMPLO ****/
function sumar(...numeros) {
  console.log(numeros);
}

sumar(1, 2, 3, 4); // [1, 2, 3, 4]


/**** EJEMPLO ****/
function sumarV2(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

console.log(sumarV2(2, 4, 6));   // 12
console.log(sumarV2(10, 20));    // 30
console.log(sumarV2());          // 0


// Se puede tener parámetros normales y luego el rest, pero solo puede haber uno y debe ir al final:
function mostrarDatos(nombre, ...hobbies) {
  console.log(nombre);
  console.log(hobbies);
}

mostrarDatos("Iván", "Ciclismo", "Programar", "Viajar");
// "Iván"
// ["Ciclismo", "Programar", "Viajar"]


/**** DESESTRUCTURACION CON REST ****/
// para Arrays
const numeros = [10, 20, 30, 40];
const [primero, ...resto] = numeros;

console.log(primero); // 10
console.log(resto);   // [20, 30, 40]

// para Objetos
const persona = {
  nombre: "Iván",
  edad: 30,
  ciudad: "Valladolid"
};
const { nombre, ...otrosDatos } = persona;

console.log(nombre);      // "Iván"
console.log(otrosDatos);  // { edad: 30, ciudad: "Valladolid" }



