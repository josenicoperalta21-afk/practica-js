function hacerAlgo() {
  return "resultado";
}
const saludo = function saludar() {
  return "Hola que tal";
};
console.log(saludo());
const suma = function sumar(num1, num2) {
  return num1 + num2;
};
console.log(suma(17, 20));

// Tipos de funciones: ANÓNIMA (funciones por expresión)
const mensaje = function () {
  return "Ingeniería de Software";
};
console.log(typeof mensaje); // Tipo de dato => function
console.log(mensaje()); // Ejecuta la función

// Función autoejecutable (IIFE)
(function () {
  console.log("Hola que tal");
})();

(function (nombre = "") {
  console.log("Bienvenido, " + nombre);
})("Katherine");

// Función autoejecutable que calcula el promedio de tres notas
(function (nota1, nota2, nota3) {
  console.log((nota1 + nota2 + nota3) / 3);
})(14, 12, 20);
