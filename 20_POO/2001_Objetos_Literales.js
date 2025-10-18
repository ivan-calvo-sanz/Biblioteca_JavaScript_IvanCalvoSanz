// ***** OBJETOS Literales*****

/*
    - Se crean directamente con llaves {} y No tienen una clase previa.
    - Son simplemente una colección de pares clave–valor.
    - Cada clave (propiedad) tiene un valor, que puede ser un número, texto, función, otro objeto, etc.
    - Las propiedades pueden accederse con punto (obj.propiedad) o con corchetes (obj["propiedad"]).
*/

/**** EJEMPLO ****/
const persona = {
  nombre: "Iván",
  edad: 30,
  ciudad: "Valladolid"
};

console.log(persona.nombre); // Iván
console.log(persona["edad"]); // 30


/**** AGREGAR O MODIFICAR PROPIEDADES ****/
persona.profesion = "Ingeniero"; // añadir nueva
persona.edad = 31;               // modificar

console.log(persona);         // { nombre: 'Iván', edad: 31, ciudad: 'Valladolid', profesion: 'Ingeniero' }

/**** ELIMINAR PROPIEDADES ****/
delete persona.ciudad;
console.log(persona);   // { nombre: 'Iván', edad: 31, profesion: 'Ingeniero' }


/**** METODOS ****/
const persona_V2 = {
  nombre: "Iván",
  edad: 30,
  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
};

persona_V2.saludar(); // Hola, soy Iván


/**** RECORRER UN OBJETO   for...in ****/
for (let clave in persona_V2) {
  if (typeof persona_V2[clave] != "function") {
    console.log(clave + ": " + persona_V2[clave]);
  }
}


/**** TAMBIEN PODEMOS ALMACENAR OBJETOS DENTRO DE OBJETOS ****/
const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  contacto: {
    email: "jonMircha@gmail.com",
    twitter: "@jommircha"
  }
}
