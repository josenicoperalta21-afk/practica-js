//En total, la matriz tiene 15 películas
const peliculas = [
  ["El exorcista", "Hereditary", "El conjuro", "Psicosis", "Halloween"],
  ["Toy Story", "El rey león", "Frozen", "Mi villano favorito", "Shrek"],
  [
    "¿Qué pasó ayer?",
    "Superbad",
    "Son como niños",
    "La máscara",
    "Y dónde están las rubias",
  ],
];

//Mostrar las 15 películas en la consola
for (let i = 0; i < peliculas.length; i++) {
  for (let j = 0; j < peliculas[i].length; j++) {
    console.log(peliculas[i][j]);
  }
}
