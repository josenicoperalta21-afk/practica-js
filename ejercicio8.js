const alimentos = [
  ["Manzana", "Kiwi", "Melon", "Fresa", "Mandarina"], // Frutas
  ["Zanahoria", "Zapallo", "Espinaca"],
  ["Pollo", "Res", "Pescado"],
  ["Maíz"],
];

//Cunatos elementos tiene la matriz

console.log("Total de elemntos matriz", alimentos.length);
//Cual es el array de la matrix que tiens ma datos
let mayor = 0;
alimentos.forEach((catAli) => {
  if (catAli.length > mayor) {
    mayor = catAli.length;
  }
});
console.log("Array mas grande contiene", mayor);

//caul es el array d ela matrx  que teien menos datos
let menor = alimentos[0].length;
alimentos.forEach((catAli) => {
  if (catAli.length < menor) {
    menor = catAli.length;
  }
});
console.log("Array mas pequeño contiene", menor);

//Cuantos elemnteo en tiotal tine la matriz condsiderando toso los arrgeglore
let total=0
alimentos.forEach((catAli) => {
  total+=catAli.length
  }
);
console.log("En total tenemos", total,"alimentos")


