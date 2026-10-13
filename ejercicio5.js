let frutas = [
  "manzana",
  "plátano",
  "naranja",
  "fresa",
  "uva",
  "mango",
  "piña",
  "sandía",
  "limón",
  "arándano",
];
//Mostrar la lista invertida (último al primero)
for (let i = frutas.length - 1; i >= 0; i--) {
  //console.log(frutas[i])
}

//Verificar si existe un elemento = "fresa"
const resultado = frutas.find((fruta) => fruta === frutaBuscada)
const encontrda = frutas.includes(frutaBuscada)
console.log(resultado,encontrda);
