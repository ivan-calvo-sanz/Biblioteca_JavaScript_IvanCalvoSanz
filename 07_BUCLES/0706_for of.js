// ***** BUCLES for of *****
/*
  recorre directamente los valores de un iterable, sin necesidad de usar índices.
*/
// ejemplo con Array
let frutas = ["manzana", "pera", "plátano"];
for (let fruta of frutas) {
  console.log(fruta);
}
// ejemplo con string
let palabra = "hola";
for (let letra of palabra) {
  console.log(letra);
}
// ejemplo con Map
let mapa = new Map([
  ["nombre", "Iván"],
  ["edad", 30]
]);
for (let [clave, valor] of mapa) {
  console.log(clave, valor);
}

