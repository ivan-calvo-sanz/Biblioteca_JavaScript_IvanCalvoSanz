// ***** throw *****

try {
  let edad = -5;
  if (edad < 0) {
    throw new Error("La edad no puede ser negativa");
  }
  console.log("Edad válida");
} catch (error) {
  console.log("Error: " + error.message);
}
finally {
  console.log("finally se ejecuta siempre")
}







