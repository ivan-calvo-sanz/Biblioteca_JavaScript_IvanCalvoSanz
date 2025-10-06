// ***** CONDICIONALES switch *****
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

