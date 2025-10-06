// ***** CLASE Date *****

/*
    - Clase nativa de JavaScript (se usa con new).
    - Trabaja internamente en milisegundos desde el 1 de enero de 1970 (UTC).
*/


/**** Fecha y hora actual ****/
let ahora = new Date();
console.log(ahora);     // 2025-10-06T18:55:00.000Z


/**** Con una fecha específica ****/
let fecha = new Date("2025-08-15");
console.log(fecha);

// (¡recuerda que los meses empiezan en 0!))
let fecha_v2 = new Date(2025, 7, 15); // Agosto = 7
console.log(fecha_v2);


/**** Con fecha y hora ****/
let fecha_v3 = new Date(2025, 7, 15, 10, 30, 0); 
console.log(fecha);     // Fri Aug 15 2025 10:30:00 GMT+0200


/**** METODOS ****/
let hoy = new Date();

console.log(hoy.getFullYear()); // Año (2025)
console.log(hoy.getMonth());    // Mes (0-11)
console.log(hoy.getDate());     // Día del mes (1-31)
console.log(hoy.getDay());      // Día de la semana (0=Domingo)
console.log(hoy.getHours());    // Horas (0-23)
console.log(hoy.getMinutes());  // Minutos
console.log(hoy.getSeconds());  // Segundos


/**** ESTABLECER PARTES DE LA FECHA ****/
let fecha_V3 = new Date();

fecha_V3.setFullYear(2030);
fecha_V3.setMonth(11); // Diciembre
fecha_V3.setDate(25);
console.log(fecha_V3);


/**** CONVERTIR A CADENAS DE TEXTO ****/
let fecha_V4 = new Date();

console.log(fecha_V4.toDateString());       // "Mon Oct 06 2025"
console.log(fecha_V4.toTimeString());       // "20:30:00 GMT+0200"
console.log(fecha_V4.toLocaleDateString()); // formato local (ej: "6/10/2025")
console.log(fecha_V4.toISOString());        // formato ISO (útil para bases de datos)


/**** OBTENER EL TIEMPO EN MILISEGUNDOS ****/
let ahora_V5 = new Date();
console.log(ahora_V5.getTime()); // milisegundos desde 1/1/1970


/**** OBTENER DIFERENCIA ENTRE FECHAS ****/
let inicio = new Date("2025-01-01");
let fin = new Date("2025-12-31");

let diferencia = fin - inicio; // milisegundos
let dias = diferencia / (1000 * 60 * 60 * 24);

console.log(`Diferencia: ${dias} días`);
