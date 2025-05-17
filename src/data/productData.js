import prod1 from "../images/prod1.jpg";
import prod2 from "../images/prod2.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import prod5 from "../images/prod5.jpg";
import prod6 from "../images/prod6.jpg";
import prod7 from "../images/prod7.jpg";
import prod8 from "../images/prod8.jpg";
import prod9 from "../images/prod9.jpg";
import prod10 from "../images/prod10.jpg";
import prod11 from "../images/prod11.jpg";
import prod12 from "../images/prod12.jpg";
import prod13 from "../images/prod13.jpg";
import prod14 from "../images/prod14.jpg";
import prod15 from "../images/prod15.jpg";
import prod16 from "../images/prod16.jpg";
import prod17 from "../images/prod17.jpg";
import prod18 from "../images/prod18.jpg";
import prod19 from "../images/prod19.jpg";

const productData = [
  {
    brand: "RINALDI",
    model: "120/70-13 HB 37",
    image: prod1,
    rating: 4.3,
    reviews: 38,
    tags: ["Scooter", "Urbano", "13 pulgadas"],
    benefit: "Excelente agarre en ciudad. Ideal para scooters modernos.",
    detail: "Diseñada para scooters urbanos de media cilindrada. Ofrece buen drenaje, baja resistencia al rodado y excelente control en ciudad.",
    specifications: {
      medida: "120/70-13",
      tipo: "HB",
      uso: "Ciudad",
      velocidad: "P",
      carga: "37",
      cámara: "Sin cámara",
      compuesto: "Convencional"
    }
  },
  {
    brand: "RINALDI",
    model: "90/90-19 SH 31",
    image: prod2,
    rating: 4.5,
    reviews: 22,
    tags: ["Enduro", "Todo Terreno", "19 pulgadas"],
    benefit: "Cubierta de tacos para uso mixto, diseñada para tierra y barro.",
    detail: "Cubierta tipo trail-enduro con dibujo agresivo. Excelente agarre en superficies irregulares y resistencia al desgaste.",
    specifications: {
      medida: "90/90-19",
      tipo: "SH",
      uso: "Mixto",
      velocidad: "S",
      carga: "52",
      cámara: "Con cámara",
      compuesto: "Reforzado"
    }
  },
  {
    brand: "RINALDI",
    model: "130/70-17 HB 37",
    image: prod3,
    rating: 4.6,
    reviews: 45,
    tags: ["Moto Calle", "R17", "Alto Rendimiento"],
    benefit: "Cubierta para motos de calle con estabilidad en ruta.",
    detail: "Diseñada para motos sport urbanas. Equilibrio entre performance y confort para uso diario en asfalto.",
    specifications: {
      medida: "130/70-17",
      tipo: "HB",
      uso: "Ciudad / Ruta",
      velocidad: "T",
      carga: "62",
      cámara: "Sin cámara",
      compuesto: "Convencional"
    }
  },
  {
    brand: "RINALDI",
    model: "90/90-18 BS 31",
    image: prod4,
    rating: 4.4,
    reviews: 31,
    tags: ["Moto Street", "18 pulgadas", "Rendimiento"],
    benefit: "Diseñada para motos livianas con uso diario.",
    detail: "Cubierta trasera para motos de baja cilindrada. Buena durabilidad y frenado controlado.",
    specifications: {
      medida: "90/90-18",
      tipo: "BS",
      uso: "Ciudad",
      velocidad: "P",
      carga: "51",
      cámara: "Con cámara",
      compuesto: "Convencional"
    }
  },
  {
    brand: "PIRELLI",
    model: "ANGEL GT 180/55 ZR 17",
    image: prod5,
    rating: 4.8,
    reviews: 162,
    tags: ["Touring", "Alta Gama", "R17"],
    benefit: "Máximo rendimiento en mojado y seco. Ideal para viajes largos.",
    detail: "La línea Angel GT está diseñada para usuarios exigentes que buscan agarre, durabilidad y control en trayectos largos.",
    specifications: {
      medida: "180/55ZR17",
      tipo: "Radial",
      uso: "Touring",
      velocidad: "W",
      carga: "73",
      cámara: "Sin cámara",
      compuesto: "Bi-compuesto"
    }
  },
  {
    brand: "URANIUM",
    model: "MOZZO SPORT 155/80R13 79H",
    image: prod6,
    rating: 4.3,
    reviews: 52,
    tags: ["Auto", "City Car", "13 pulgadas"],
    benefit: "Buena durabilidad para uso urbano. Eficiencia en frenado.",
    detail: "Cubierta urbana para autos pequeños. Aporta seguridad en frenadas cortas y reduce consumo por baja resistencia.",
    specifications: {
      medida: "155/80R13",
      tipo: "Radial",
      uso: "Urbano",
      velocidad: "H",
      carga: "79",
      cámara: "Sin cámara",
      compuesto: "Silica base"
    }
  },
  {
    brand: "URANIUM",
    model: "155/80R13",
    image: prod7,
    rating: 4.2,
    reviews: 40,
    tags: ["Auto Compacto", "13 pulgadas", "Económico"],
    benefit: "Cubierta económica con diseño de canaleta para buen drenaje.",
    detail: "Cubierta de entrada para automóviles compactos. Diseño optimizado para lluvia y control urbano.",
    specifications: {
      medida: "155/80R13",
      tipo: "Radial",
      uso: "Ciudad",
      velocidad: "T",
      carga: "79",
      cámara: "Sin cámara",
      compuesto: "Convencional"
    }
  },
  {
    brand: "URANIUM",
    model: "MOZZO SPORT 155/80R13",
    image: prod8,
    rating: 4.3,
    reviews: 61,
    tags: ["Auto", "Ciudad", "Performance"],
    benefit: "Cubierta equilibrada entre confort, duración y tracción.",
    detail: "Modelo diseñado para control en curvas y buena frenada en seco. Alta durabilidad en uso diario.",
    specifications: {
      medida: "155/80R13",
      tipo: "Radial",
      uso: "Urbano",
      velocidad: "H",
      carga: "79",
      cámara: "Sin cámara",
      compuesto: "Silica"
    }
  },
  {
    brand: "URANIUM",
    model: "245/65R17",
    image: prod9,
    rating: 4.5,
    reviews: 88,
    tags: ["SUV", "Pickup", "All-Terrain"],
    benefit: "Diseñada para tracción y estabilidad en caminos mixtos.",
    detail: "Cubierta A/T para uso mixto con hombros reforzados y canaletas agresivas. Excelente para ripio, barro o ruta.",
    specifications: {
      medida: "245/65R17",
      tipo: "Radial",
      uso: "Mixto",
      velocidad: "T",
      carga: "107",
      cámara: "Sin cámara",
      compuesto: "Off-Road Blend"
    }
  },
  {
    brand: "PIRELLI",
    model: "SUPER CITY 90/90-18",
    image: prod10,
    rating: 4.7,
    reviews: 71,
    tags: ["Moto", "Urbana", "18 pulgadas"],
    benefit: "Durabilidad superior para uso diario en ciudad.",
    detail: "Línea económica urbana con excelente vida útil. Recomendado para delivery y movilidad urbana.",
    specifications: {
      medida: "90/90-18",
      tipo: "Diagonal",
      uso: "Ciudad",
      velocidad: "S",
      carga: "51",
      cámara: "Con cámara",
      compuesto: "Convencional"
    }
  },
  {
    brand: "PIRELLI",
    model: "DIABLO ROSSO II 200/50 ZR 17",
    image: prod14,
    rating: 4.9,
    reviews: 130,
    tags: ["Sport", "ZR", "R17"],
    benefit: "Tracción superior en rectas y frenado en pista.",
    detail: "Cubierta trasera hypersport de gran superficie de contacto. Máximo rendimiento en aceleración y curvas.",
    specifications: {
      medida: "200/50ZR17",
      tipo: "Radial",
      uso: "Sport",
      velocidad: "W",
      carga: "75",
      cámara: "Sin cámara",
      compuesto: "Bi-compuesto"
    }
  },
  {
    brand: "RINALDI",
    model: "3.50-10 BS 32",
    image: prod15,
    rating: 4.4,
    reviews: 20,
    tags: ["Scooter", "10 pulgadas"],
    benefit: "Para scooters livianos con excelente agarre urbano.",
    detail: "Cubierta compacta para ciclomotores y scooters. Estabilidad y maniobrabilidad mejoradas.",
    specifications: {
      medida: "3.50-10",
      tipo: "BS",
      uso: "Ciudad",
      velocidad: "J",
      carga: "51",
      cámara: "Con cámara",
      compuesto: "Convencional"
    }
  },
  {
    brand: "URANIUM",
    model: "245/75R17 SUV",
    image: prod16,
    rating: 4.5,
    reviews: 59,
    tags: ["SUV", "All-Terrain", "Pickup"],
    benefit: "Estabilidad en terrenos mixtos y carga pesada.",
    detail: "Cubierta para camionetas y SUV con tracción reforzada. Ideal para viajes mixtos.",
    specifications: {
      medida: "245/75R17",
      tipo: "Radial",
      uso: "Mixto",
      velocidad: "S",
      carga: "112",
      cámara: "Sin cámara",
      compuesto: "Refuerzo lateral"
    }
  },
  {
    brand: "RINALDI",
    model: "90/90-21 RMX",
    image: prod17,
    rating: 4.6,
    reviews: 33,
    tags: ["Enduro", "Cross", "21 pulgadas"],
    benefit: "Cubierta delantera de tacos para motos enduro o cross.",
    detail: "Ideal para caminos de tierra, barro o terrenos sueltos. Alta resistencia al impacto.",
    specifications: {
      medida: "90/90-21",
      tipo: "RMX",
      uso: "Off-road",
      velocidad: "M",
      carga: "54",
      cámara: "Con cámara",
      compuesto: "Taco blando"
    }
  },
  {
    brand: "MICHELIN",
    model: "ANAKEE ADVENTURE 120/70 R19",
    image: prod18,
    rating: 4.9,
    reviews: 82,
    tags: ["Adventure", "Trail", "19 pulgadas"],
    benefit: "Diseñada para motos dual-sport. Seguridad en ruta y ripio.",
    detail: "Mezcla equilibrio entre asfalto y off-road. Tecnología de sílice para lluvia y adherencia.",
    specifications: {
      medida: "120/70R19",
      tipo: "Radial",
      uso: "Trail/Adventure",
      velocidad: "V",
      carga: "60",
      cámara: "Sin cámara",
      compuesto: "2CT+ Silica"
    }
  },
  {
    brand: "PIRELLI",
    model: "SPORT DEMON 140/70-17",
    image: prod19,
    rating: 4.6,
    reviews: 54,
    tags: ["Touring", "Sport", "R17"],
    benefit: "Para motos medianas. Excelente duración y rendimiento urbano.",
    detail: "Ideal para uso diario y paseos largos. Rápido calentamiento y buen drenaje.",
    specifications: {
      medida: "140/70-17",
      tipo: "Diagonal",
      uso: "Touring",
      velocidad: "H",
      carga: "66",
      cámara: "Sin cámara",
      compuesto: "Convencional"
    }
  }
];




export default productData;