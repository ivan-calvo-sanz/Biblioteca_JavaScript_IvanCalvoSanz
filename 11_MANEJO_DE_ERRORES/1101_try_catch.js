// ***** try catch *****
/*
  - Se usa para manejar errores de forma controlada y evitar que el programa se detenga si algo falla
*/

try {
  let resultado = numero * 2; // 'numero' no está definido LANZA ERROR
  console.log(resultado);
} catch (error) {
  console.log("Ha ocurrido un error: " + error.message);
}


// ***** finally *****
// finally se ejecuta siempre, haya o no error
try {
  console.log("Inicio del try");
  let x = 5 / 0; // Esto no lanza error, pero es Infinity
  console.log("Resultado:", x);
} catch (error) {
  console.log("Error capturado");
} finally {
  console.log("El bloque finally siempre se ejecuta");
}





