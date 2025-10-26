// ***** FUNCIONES ARROW FUNCTIONS (FUNCIONES FLEHA) *****


// ***** EJEMPLOS ARROW FUNCTIONS *****
// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Arrow function equivalente
// Si solo tiene una expresión, el return y las llaves {} se omiten.
const sumar_v2 = (a, b) => a + b;

// Sin parámetros
const saludar = () => console.log("Hola!");

// Un parámetro (sin paréntesis)
const cuadrado = x => x * x;

// Múltiples parámetros
const resta = (a, b) => a - b;

// Con más de una línea (necesita llaves y return)
const multiplicar = (a, b) => {
  const resultado = a * b;
  return resultado;
};



// ***** DIFERENCIAS CON LAS FUNCIONES NORMALES *****
// El valor de "this" dentro de una arrow function hereda del contexto donde fue creada, no del objeto que la llama.
function Persona() {
  this.edad = 0;

  setInterval(() => {
    this.edad++; // 'this' se refiere al objeto Persona
    console.log(this.edad);
  }, 1000);
}

new Persona();


// ***** CASOS TIPICOS DE USO *****
// Callbacks en arrays:
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6]

// Promesas:
fetch('/api/datos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));








