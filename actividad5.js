//Crear una funcion autoeejcutable que imprima cunatas horasa , minutos y degundo 
//faltan para terminar el dia
(function () {
    var fecha = new Date();

    var horas = 23 - fecha.getHours();
    var minutos = 59 - fecha.getMinutes();
    var segundos = 59 - fecha.getSeconds();

    console.log("Faltan " + horas + " horas, " + minutos +
                " minutos y " + segundos + " segundos.");
})();

//Crear una funcion autoejcutable que solicite un numero(expresado en segundo)y mas
//devuelvo un saludo, despues del tiempo indicado 


var readline = require("readline");
var timers = require("timers");

(function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Ingrese los segundos: ", function (segundos) {
        timers.setTimeout(function () {
            console.log("Si funciona ");
            rl.close();
        }, segundos * 1000);
    });
})();
