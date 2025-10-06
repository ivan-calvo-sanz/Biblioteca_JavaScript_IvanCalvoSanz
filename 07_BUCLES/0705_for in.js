// ***** BUCLES for in *****
/*
  - recorre todas las propiedades enumerables de un objeto
  - propiedad → toma los nombres de las claves del objeto
  - persona[propiedad] → accede al valor correspondiente
*/
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

