// ***** FUNCIONES *****


/**** FUNCIONES DECLARADAS ****/
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado); // 8


/**** FUNCIONES EXPRESADAS (ANONIMAS) ****/
const multiplicar = function(a, b) {
  return a * b;
};
console.log(multiplicar(2, 4)); // 8


/**** FUNCIONES FLECHA ****/
const dividir = (a, b) => {
  return a / b;
};

//Si la función tiene una sola línea, se puede simplificar:
const cuadrado = x => x * x;
console.log(cuadrado(4)); // 16


/**** PARAMETROS POR DEFECTO ****/
function saludar(nombre = "amigo") {
  console.log("Hola " + nombre);
}
saludar();       // Hola amigo
saludar("Iván"); // Hola Iván

