//Que es una funcion
//Conju nto de instrucciones que se pueden reutilizar
//Acepta parametros de salida y pueden devolver algun valor (opcional)
function saludar() {
  console.log("Hola");
}
function despedirse() {
  return "Adios";
}
function verificarNota(calificacion) {
  //Aprobado - desaprobado
  // if (calificacion >= 10.5) return "Aprobado";
  // else return "Desaprobado";
  return calificacion >= 10.5 ? "Aprobado" : "Desaprobado";
}
//La funcion rretorno el neto , incrementando +150 por cada hijo
function calcularSueldo(sueldoBasico, numeroHijos) {
  return (sueldoBasico = sueldoBasico + numeroHijos * 150);
}
//>= 65 "Jubilacion activa", contrario "falso laboral"
function verifarJubilacion(edad) {
  return edad >= 65 ? "Jubilacion activa" : "Fase laboral";
}
//Esta funcion recibe un alista de sueldos (no sbaemo sla cantida de elementos)
//Tambiesn se debe indicar si obtendremos el mayor
//La funcion retorna el mayor o menor suldo dependiento de su configuracion
function analizarSueldos(listaSueldos = [], obtenermayor = true) {
  let resultado = 0;
  if (obtenermayor) {
    listaSueldos.forEach((sueldo) => {
      if (sueldo > resultado) resultado = sueldo;
    });
  } else {
    resultado = listaSueldos[0];
    listaSueldos.forEach((sueldo) => {
      if (sueldo < resultado) resultado = sueldo;
    });
  }

  return resultado;
}

function obtenerTelefonos(objeto = {}) {
  return objeto.telefono;
}
//Retornar un objeto con los parametros
function crearObjeto(apellidos = "", nombres = "", edad = 0) {
  return {
    apellidos: apellidos,
    nombres: nombres,
    edad: edad,
  };
}
saludar();
console.log(despedirse());
console.log(verificarNota(16));
console.log(calcularSueldo(3500, 0));
console.log(verifarJubilacion(45));
console.log(analizarSueldos([3500, 1800, 4100], false));
const perfil = {
  nombres: "Luis Mateo",
  dni: "87654321",
  telefono: ["987654321", "123456789"],
};
console.log(obtenerTelefonos(perfil));
console.log(crearObjeto("Peralta", "Nicolas", 19));
