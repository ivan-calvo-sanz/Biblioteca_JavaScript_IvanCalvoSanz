// ***** FUNCIONES *****


/* ESQUEMA FUNCIONES
  - FUNCIONES DECLARADAS:                 function sumar(a, b) { return a + b; };
  - FUNCIONES EXPRESADAS:                 const sumar = function(a, b) { return a + b; };
  - FUNCIONES FLECHA:                     const sumar = (a, b) => { return a + b; };
  - FUNCIONES FLECHA DE UNA SOLA LINEA:   const sumar = (a, b) => a + b;
*/


/**** FUNCIONES DECLARADAS vs FUNCIONES EXPRESADAS
  - Las FUNCIONES DECLARADAS se pueden invocar en cualquier parte del código, incluso antes de que la función sea declarada.
  Esto es porque JS hace hosting de las FUNCIONES DECLARADAS, es decir JS "eleva" la función al principio de su ámbito de ejecución.
  - Las FUNCIONES EXPRESADAS NO SE PUEDEN INVOCAR ANTES DE SER DECLARADAS ya que JS NO hace hosting de las FUNCIONES EXPRESADAS
*/


/**** FUNCIONES DECLARADAS  ****/
let resultado = sumar(5, 3);  // Como es una Función Declarada se puede invocar antes de que la hayamos declarado
console.log(resultado); // 8

function sumar(a, b) {
  return a + b;
}


/**** FUNCIONES EXPRESADAS (ANONIMAS) ****/
//console.log(multiplicar(2, 5)); // 10   ERORR Las funciones Expresadas NO se pueden invocar antes de ser declaradas
const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(2, 5)); // 10



/**** FUNCIONES FLECHA (ARROW FUNCTION) ****/
const dividir = (a, b) => {
  return a / b;
};

/**** FUNCIONES FLECHA UNA SOLA LINEA ****/
//Si la función flecha tiene una sola línea, se puede simplificar:
const cuadrado = x => x * x;
console.log(cuadrado(5)); // 25


/**** VALOR DE PARAMETROS POR DEFECTO ****/
function saludar(nombre = "Pedro") {
  console.log(`Hola mi nombre es ${nombre}`);
}
saludar();       // Hola mi nombre es Pedro
saludar("Iván"); // Hola mi nombre es Iván

