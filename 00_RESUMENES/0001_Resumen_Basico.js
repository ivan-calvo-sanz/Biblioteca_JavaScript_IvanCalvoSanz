// else if
let edad = -100;
if (edad > 17) {
  console.log("Eres mayor de Edad");
} else if (edad > 0 && edad <= 17) {
  console.log("Eres menor de Edad");
} else {
  console.log("Error al introducir la edad");
}

// OPERADOR TERNARIO
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";

// switch
let dia = "martes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "martes":
  case "miércoles":
  case "jueves":
    console.log("Mitad de semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  default:
    console.log("Fin de semana");
}

// while
let contador = 1;
while (contador <= 5) {
  console.log("Número: " + contador);
  contador++; // ¡IMPORTANTE! para que no se repita infinitamente
}

// do while
let numero = 0;
do {
  console.log("Número:", numero);
  numero++;
} while (numero < 3);

// for
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}

let frutas_v2 = ["manzana", "pera", "plátano"];
for (let i = 0; i < frutas_v2.length; i++) {
  console.log(frutas_v2[i]);
}

// forEach
let numeros = [10, 20, 30];
numeros.forEach(n => {
  console.log("Número:", n);
});

// ARRAYS
const frutas = ["manzana", "pera", "plátano"];
for (let i of frutas) {
  console.log(i); // manzana, pera, plátano
}

// OBJETOS LITERALES
const persona = {
  nombre: "Iván",
  edad: 30,
  ciudad: "Valladolid"
};

