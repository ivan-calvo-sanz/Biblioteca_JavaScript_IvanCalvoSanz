// ***** TEORIA CONDICIONALES *****

/*
    - Una condicional permite que el programa tome decisiones dependiendo de si una condición es verdadera (true) o falsa (false)
*/


/***** if *****/
let llueve = true;

if (llueve) {
  console.log("Coge paraguas");
}


/***** if, else if, else *****/
if (condición) {
  // Se ejecuta si la condición es verdadera
} else if (otraCondición) {
  // Se ejecuta si la anterior es falsa pero esta verdadera
} else {
  // Se ejecuta si ninguna es verdadera
}


/***** OPERADOR TERNARIO *****/
let edad = 18;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);


/***** switch *****/
// Se usa cuando hay muchas condiciones posibles sobre un mismo valor.
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


