
const computadora = {
  marca: "Custom Build",
  modelo: "Workstation Pro",
  anioFabricacion: 2025,
  precioUSD: 2350.50,
  encendida: true,

  sistemasOperativos: ["Ubuntu 24.04 LTS", "Windows 11 Pro"],
  perifericosConectados: [
    "Teclado Mecánico",
    "Mouse Ergonómico",
    "Monitor 4K",
    "Micrófono USB"
  ],

  hardware: {
    procesador: {
      marca: "AMD",
      linea: "Ryzen 9",
      modelo: "7900X",
      nucleosFisicos: 12,
      hilos: 24,
      frecuenciaBaseGhz: 4.7,
      frecuenciaTurboGhz: 5.6,
      temperaturaActualC: 48.2
    },

    memoriaRAM: {
      capacidadTotalGB: 64,
      tipo: "DDR5",
      frecuenciaMhz: 6000,
      modulosInstalados: 2,
      ranurasTotales: 4,
      soportaXMP: true
    },

    almacenamiento: [
      {
        tipo: "SSD NVMe M.2",
        capacidadGB: 1000,
        marca: "Samsung 990 Pro",
        velocidadLecturaMBs: 7450,
        usoPrincipal: "Sistema Operativo"
      },
      {
        tipo: "SSD NVMe M.2",
        capacidadGB: 2000,
        marca: "Kingston KC3000",
        velocidadLecturaMBs: 7000,
        usoPrincipal: "Proyectos y Juegos"
      }
    ],

    tarjetaGrafica: {
      marca: "NVIDIA",
      modelo: "GeForce RTX 4080 Super",
      vramGB: 16,
      tipoVRAM: "GDDR6X",
      puertosSalida: ["HDMI 2.1", "DisplayPort 1.4a"]
    },

    placaBase: {
      fabricante: "ASUS",
      chipset: "B650E",
      factorForma: "ATX",
      tieneWifi: true,
      tieneBluetooth: true
    },

    fuentePoder: {
      marca: "Corsair",
      vatios: 850,
      certificacion: "80 Plus Gold",
      modular: true
    }
  },

  red: {
    ipLocal: "192.168.1.45",
    macAddress: "00:1A:2B:3C:4D:5E",
    velocidadDescargaMbps: 300,
    conectadoPorCable: true
  },

  softwareInstalado: [
    {
      nombre: "Visual Studio Code",
      version: "1.92.0",
      categoria: "Desarrollo",
      extensiones: ["JavaScript", "Python", "GitLens"]
    },
    {
      nombre: "Docker Desktop",
      version: "4.30.0",
      categoria: "DevOps",
      contenedoresActivos: 3
    },
    {
      nombre: "Google Chrome",
      version: "126.0",
      categoria: "Navegador Web",
      perfilesActivos: ["Personal", "Estudios"]
    }
  ],

  propietario: {
    nombre: "José",
    rol: "Desarrollador Backend",
    permisosAdmin: true,
    habilidades: [
      {
        skill: "Base de datos",
        herramientas: ["MySQL", "Oracle", "SQLite"]
      },
      {
        skill: "Programación",
        herramientas: ["JavaScript", "PHP", "Java", "Python"]
      },
      {
        skill: "Sistemas operativos",
        herramientas: ["Windows", "Linux", "Android"]
      }
    ]
  }
};


// Consultar datos
console.log(computadora.marca);
console.log(computadora.modelo);
console.log(computadora.sistemasOperativos[0]);
console.log(computadora.perifericosConectados.length);

console.log(computadora.hardware.procesador.modelo);
console.log(computadora.hardware.memoriaRAM.capacidadTotalGB);
console.log(computadora.hardware.almacenamiento[0].marca);
console.log(computadora.hardware.almacenamiento[1].capacidadGB);

console.log(computadora.hardware.tarjetaGrafica.modelo);
console.log(computadora.hardware.placaBase.fabricante);
console.log(computadora.hardware.fuentePoder.vatios);

console.log(computadora.red.ipLocal);
console.log(computadora.softwareInstalado[0].nombre);
console.log(computadora.softwareInstalado[0].extensiones[1]);
console.log(computadora.propietario.habilidades[1].herramientas);
console.log(computadora.softwareInstalado.length);


// Recorrer arreglos
computadora.sistemasOperativos.forEach((sistema) => {
  console.log(sistema);
});

computadora.hardware.almacenamiento.forEach((disco) => {
  console.log(disco.marca);
});

computadora.softwareInstalado.forEach((programa) => {
  console.log(programa.nombre);
});

const lista = computadora.propietario.habilidades[0].herramientas;

lista.forEach((herramienta) => {
  console.log(herramienta);
});


// Condiciones
if (computadora.encendida == true) {
  console.log("La computadora está encendida");
} else {
  console.log("La computadora está apagada");
}

if (computadora.hardware.memoriaRAM.capacidadTotalGB >= 32) {
  console.log("Tiene 32 GB de RAM o más");
}

computadora.softwareInstalado.forEach((programa) => {
  if (programa.categoria == "Desarrollo") {
    console.log(programa.nombre);
  }
});

computadora.hardware.almacenamiento.forEach((disco) => {
  if (disco.capacidadGB >= 2000) {
    console.log(disco.marca);
  }
});
