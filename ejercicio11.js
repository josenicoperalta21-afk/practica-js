const persona = {
  apellidos: "Peralta",
  nombre: "Nicolas",
  hablar: function () {
    return "Hola que tal";
  },
  locacion: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Sunanpe",
    direccion: "Mina de oro",
    mostrar: function () {
      return `
    ${this.departamento}-${this.provincia}-${this.distrito}-${this.direccion}`;
    },
  },
};
console.log(persona.hablar());
console.log(persona.locacion["departamento"]);
console.log(persona.locacion.mostrar());
