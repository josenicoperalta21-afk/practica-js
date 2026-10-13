const paises = [
  ["Brasil", "México", "Canadá", "Argentina"],
  ["Francia", "Inglaterra", "Suiza", "Grecia"],
  ["Japón", "Tailandia", "India", "Singapur"],
  ["Egipto", "Madagascar", "Kenia", "Sudáfrica"]
];

// Recorrer y mostrar los países en la consola usando forEach
paises[2].forEach(pais => {
  console.log(pais);
});
//agrega 2 paises en la liosta d eakerica
paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log ("- - - - - - - - - - - - - - -")
paises[0].forEach(pais => {
  console.log(pais);
});