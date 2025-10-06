// ***** BUCLES forEach *****
/*
  - es un método propio de los arrays.
  - Ejecuta una función una vez por cada elemento del array
*/
let numeros = [10, 20, 30];
numeros.forEach(n => {
  console.log("Número:", n);
});

let frutas = ["manzana", "pera", "plátano"];
frutas.forEach((fruta, i) => {
  console.log(i + ": " + fruta);
});

