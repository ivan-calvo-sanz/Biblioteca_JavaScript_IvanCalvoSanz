// ***** DESTRUCTURACION *****

/*
    - Es una forma rápida y clara de extraer valores de arrays u objetos y asignarlos a variables en una sola línea.
*/


/**** DESTRUCTURACION DE OBJETOS ****/
// Extraer las propiedades de un objeto y asignarlas a variables con el mismo nombre:
const persona = {
    nombre: "Iván",
    edad: 30,
    ciudad: "Valladolid"
};
const { nombre, edad } = persona;
console.log(nombre); // "Iván"
console.log(edad);   // 30

// También se puede cambiar el nombre de la variable:
const { nombre: nombreUsuario, ciudad: localidad } = persona;
console.log(nombreUsuario); // "Iván"
console.log(localidad);     // "Valladolid"

// Y se puede asignar valores por defecto por si la propiedad no existe:
const { profesion = "Ingeniero" } = persona;
console.log(profesion); // "Ingeniero"



/**** DESTRUCTURACION DE ARRAYS ****/
// Extrae los elementos del Array
const numeros = [10, 20, 30];
const [primero, segundo, tercero] = numeros;
console.log(segundo); // 20

// Se puede saltar posiciones
const [, , ultimo] = numeros;
console.log(ultimo); // 30

// Se puede usar valores por defecto
const [x = 1, y = 2, z = 3] = [10];
console.log(x, y, z); // 10, 2, 3



/**** DESTRUCTURACION EN FUNCIONES ****/
// Desestructuracion pasando un objeto a la funcion
function mostrarDatos({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona_V2 = {
    nombre: "Iván",
    edad: 30
};
mostrarDatos(persona_V2); // Nombre: Iván, Edad: 30

// Desestructuracion pasando un array a la funcion
function suma([a, b]) {
    return a + b;
}

console.log(suma([3, 5])); // 8



/**** DESTRUCTURACION DE OBJETOS DENTRO DE OBJETOS ****/
const usuario = {
    nombre: "Iván",
    direccion: {
        ciudad: "Valladolid",
        codigoPostal: 47001
    }
};

const { direccion: { ciudad, codigoPostal } } = usuario;
console.log(ciudad);        // "Valladolid"
console.log(codigoPostal);  // 47001



/**** DESTRUCTURACION DE ARRAY DENTRO DE OBJETOS ****/
const equipo = {
    nombre: "Real Madrid",
    jugadores: ["Bellingham", "Vinicius", "Rodrygo"]
};

const { jugadores: [jugador1, jugador2] } = equipo;
console.log(jugador1); // "Bellingham"
console.log(jugador2); // "Vinicius"














