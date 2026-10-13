// Funcion 3:
// Recibir dos arreglos y sumar sus elementos.
// Ambos deben tener la misma cantidad de elementos.

function sumarArreglos(lista1 = [], lista2 = []) {
  if (lista1.length != lista2.length) {
    return [];
  }

  let resultado = [];

  lista1.forEach((numero, indice) => {
    resultado.push(numero + lista2[indice]);
  });

  return resultado;
}

console.log("Funcion 03: Suma de arreglos");
console.log("Arreglos ; ([1, 2, 3],[4, 5, 6])");
console.log("Resultado de la suma:", sumarArreglos([1, 2, 3], [4, 5, 6]));

console.log("Prueba con arreglos de diferente cantidad: ([1, 2], [3, 4, 5]));");
console.log("Resultado:", sumarArreglos([1, 2], [3, 4, 5]));
console.log(" ");

// Funcion 4:
// Recibir un numero positivo y encontrar sus divisores.

function obtenerDivisores(numero) {
  let resultado = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

// Test y demostracion


console.log("Funcion 4: Divisores de un numero");
console.log("22")
console.log("Sus divisores son:", obtenerDivisores(22));
console.log("40")
console.log("Sus divisores son:", obtenerDivisores(40));
