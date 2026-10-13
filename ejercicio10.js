//Objetos = JSON (Javascript object Notation)
//Estructura que guarda datos utilizando {key: values}
let perfil = {
  apellidos: "Peralta",
  nombres: "Nicolas",
  edad: 19,
  telefono: ["970070890", "987654321", "912345678"],
  formacion: [
    { nivel: "Primaria", nombre: "23001", anio: 2012 },
    { nivel: "Secundaria", nombre: "J.F.K.", anio: 2020 },
    { nivel: "Superior", nombre: "SENATI", anio: 2024 },
  ],
  habilidades: [
    { skill: "Base de datos", herramientas: ["MYSQL", "Oracles", "SQLite"] },
    {
      skill: "Lenguaje de programacion",
      herramientas: ["Javascript", "PHP", "Java", "C#", "Pytohn"],
    },
    {
      skill: "Sistemas operativos",
      herramientas: ["Windows", "Linux", "Android"],
    },
  ],
};
//Habilidades en programacion
console.log(perfil.habilidades[1].herramientas);
//Cual es el nombre del centro de formacion secundaria
console.log(perfil.formacion[1].nombre);
//Caunto stelefono tien la persona
console.log(perfil.telefono.length);
//mostar cada unno de esos motore sd ebase de datos
const lista = perfil.habilidades[0].herramientas;
lista.forEach((ha) => {
  console.log(ha);
});
