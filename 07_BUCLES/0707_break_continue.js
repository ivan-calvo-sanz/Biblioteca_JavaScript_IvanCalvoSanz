// ***** break EN BUCLES *****
/*
    - Detiene por completo un bucle
    - Cuando se encuentra un break, la ejecución sale inmediatamente del bucle, aunque la condición siga siendo verdadera.
*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // rompe el bucle
  }
  console.log(i);
}
// Salida: 0,1,2,3,4



// ***** continue EN BUCLES *****
/*
    - Salta la iteración actual y pasa a la siguiente del bucle
    - No detiene el bucle completo
*/
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // salta números pares
  }
  console.log(i);
}
// Salida: 1,3,5,7,9

