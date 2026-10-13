const computadora = {
  // Datos generales del equipo
  id: "PC-2026-DEV-01",
  marca: "Custom Build",
  modelo: "Workstation Pro",
  anioFabricacion: 2025,
  precioUSD: 2350.50,
  encendida: true,

  // Arreglos simples ([])
  sistemasOperativos: ["Ubuntu 24.04 LTS", "Windows 11 Pro"],
  perifericosConectados: ["Teclado Mecánico", "Mouse Ergonómico", "Monitor 4K", "Micrófono USB"],

  // Objeto anidado de Hardware ({})
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
    // Arreglo de objetos (múltiples discos de almacenamiento)
    almacenamiento: [
      {
        id: "NVME-1",
        tipo: "SSD NVMe M.2",
        capacidadGB: 1000,
        marca: "Samsung 990 Pro",
        velocidadLecturaMBs: 7450,
        usoPrincipal: "Sistema Operativo"
      },
      {
        id: "NVME-2",
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
      puertosSalida: ["HDMI 2.1", "DisplayPort 1.4a", "DisplayPort 1.4a"]
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

  // Objeto anidado de Red
  red: {
    ipLocal: "192.168.1.45",
    macAddress: "00:1A:2B:3C:4D:5E",
    velocidadDescargaMbps: 300.0,
    conectadoPorCable: true
  },

  // Arreglo de objetos para Software / Aplicaciones
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

  // Información del usuario asignado
  propietario: {
    nombre: "José",
    rol: "Desarrollador Backend",
    permisosAdmin: true
  }
};