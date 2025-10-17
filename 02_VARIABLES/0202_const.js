// ***** const *****

/*
    - Se usa para valores que no cambian.
    - Tiene ámbito de bloque como let.
    - Hay que declararla y asignarla.
    - No se puede reasignar ni redeclarar.
*/

// const NO funciona igual para TIPOS PRIMITIVOS que para OBJETOS y ARRAYS      

// EJEMPLO para un tipo primitivo
const PI = 3.14;
// PI=3;   // NO SE PUEDE MODIFICAR EL VALOR me da error

// EJEMPLO para un objeto
const objeto = {
    nombre: "Ivan",
    edad: 35
}
console.log(objeto);    // {nombre: 'Ivan', edad: 35}
// añado nuevos valores y SI! me deja modificarlo aun siendo variable const
objeto.email = "email";
console.log(objeto);    // {nombre: 'Ivan', edad: 35, email: 'email'}

// EJEMPLO para un Array
const colores = ["blanco", "negro", "azul"];
console.log(colores);   // (3) ['blanco', 'negro', 'azul']
// añado nuevos valores y SI! me deja modificarlo aun siendo variable const
colores.push("naranja");
console.log(colores);   // (4) ['blanco', 'negro', 'azul', 'naranja']

/*
ESTO SUCEDE PORQUE EN LOS TIPOS PRIMITIVOS ESTAMOS ACCEDIENDO DIRECTAMENTE AL VALOR Y NO ES POSIBLE CAMBIARLO,
MIENTRAS QUE EN LOS OBJETOS Y ARRAYS ACCEDEMOS A LA REFERENCIA EN MEMORIA, 
ESTA REFERENCIA NO LA ESTAMOS CAMBIANDO SINO QUE ESTAMOS CAMBIANDO LO QUE CONTIENE DENTRO DE ELLA POR ESO SI NOS DEJA MODIFICAR SUS VALORES 
*/

console.log("Hola mundo".split(" "));