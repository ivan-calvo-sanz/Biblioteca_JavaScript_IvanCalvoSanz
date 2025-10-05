// ***** TEORIA promt *****

/* prompt
    Devuelve el texto que el usuario introduce o null si pulsa Cancelar.
    let variable = prompt(mensaje, valorPorDefecto);
*/
let nombre, edad;
nombre = prompt('INGRESE SU NOMRE:');
edad = prompt('INGRESE SU EDAD:');
document.writeln('Nombre: ' + nombre + '<br>');
document.writeln('Edad: ' + edad);

// para pedir a usuario un valor entero hay que hacer un parse sino sería un String
let a=parseInt(pompt('Ingrese el valor de a'));


// ***** TEORIA alet *****
let nombre_v2 = prompt("¿Cómo te llamas?", "Tienes que indicar un nombre verdadero");
alert("Hola " + nombre + "!");




