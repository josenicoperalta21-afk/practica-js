// Funcion 1:
// Recibir un arreglo y contar los numeros pares e impares.
function contarNumeros(lista = []) {
  let pares = 0,
    impares = 0;

  lista.forEach((numero) => {
    if (numero % 2 == 0) {
      pares++;
    } else {
      impares++;
    }
  });

  return {
    Pares: pares,
    Impares: impares,
  };
}

console.log("Funcion 01: Pares e impares");
console.log("Lista de numeros:", [7, 2, 3, 4, 5, 6]);
console.log("Cantidad de pares e impares:", contarNumeros([7, 2, 3, 4, 5, 6]));
console.log(" ");

// Funcion 2:
// Verificar si un numero es capicua.
// Solo permite numeros de hasta 5 digitos.

function verificarCapicua(numero) {
  let texto = String(numero),
    invertido = "";

  if (texto.length > 5 ) {
    return false;
  }

  for (let i = texto.length - 1; i >= 0; i--) {
    invertido = invertido + texto[i];
  }

  return texto == invertido;
}

// Test y demostracion

console.log("Funcion 02: Numeros capicua");

console.log("El numero 121 es:", verificarCapicua(121));
console.log("El numero 444 es:", verificarCapicua(444));
console.log("El numero 3223 es:", verificarCapicua(3223));
console.log("El numero 123 es:", verificarCapicua(123));
console.log("El numero 123456 es:", verificarCapicua(123456));
