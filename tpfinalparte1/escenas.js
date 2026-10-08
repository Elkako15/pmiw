function inicializarEscenas() {
  return [
    {
      id: "portada",
      title: "El Reino Subterráneo",
      text: ["Hacé clic para comenzar la aventura."],
      image: "1",
      opciones: [{ l: "Comenzar la aventura", to: 1 }]
    },

    {
      id: "caida",
      title: "La Caída",
      text: [
        "Una expedición al corazón de Groenlandia toma un giro aterrador.",
        "El suelo de hielo cede bajo tus pies y sentís la ingravidez absoluta",
        "mientras caés por una sima insondable.",
        "El viento helado silba en tus oídos y la luz se apaga sobre ti."
      ],
      image: "2",
      opciones: [{ l: "Continuar descendiendo...", to: 2 }]
    },

    {
      id: "fondo",
      title: "El Fondo del Abismo",
      text: [
        "Tras una caída que pareció eterna, aterrizás sobre una suave alfombra",
        "de musgo fosforescente en las profundidades de la Tierra.",
        "El frío del exterior desaparece, reemplazado por un aire tibio y un",
        "zumbido electromagnético que resuena en las paredes de roca."
      ],
      image: "3",
      opciones: [{ l: "Inspeccionar la caverna...", to: 3 }]
    },

    {
      id: "encrucijada",
      title: "Elegí un camino",
      text: [],
      image: "4",
      pantalladiv: true,
      divZonas: 3,
      niveles: ["Nave Vertakraft", "Nido del Ave", "Selva de Hongos"],
      destinos: [4, 7, 12],
      opciones: []
    },

    {
      id: "nave_lab",
      title: "La Nave Vertakraft — Laboratorio",
      text: [
        "Entrás en la cámara helada de la nave Vertakraft.",
        "Los paneles de control parpadean con luces de emergencia y sobre",
        "la mesa descansan los diarios del Profesor Bruckner.",
        "Un motor oculto vibra intensamente bajo tus pies."
      ],
      image: "5",
      opciones: [{ l: "Tomar el control de la nave", to: 5 }]
    },

    {
      id: "nave_cabina",
      title: "La Cabina",
      text: [
        "Te acomodás en el asiento del piloto. La nave se sacude mientras",
        "desciende por un conducto magnético que atraviesa el manto terrestre.",
        "El indicador de gravedad oscila sin control hacia valores negativos."
      ],
      image: "6",
      opciones: [{ l: "Activar los propulsores de rescate", to: 6 }]
    },

    {
      id: "final1",
      title: "FINAL 1 — Rumbo a las Estrellas",
      text: [
        "La palanca de emergencia activa los cohetes de inversión a máxima potencia.",
        "La nave no se detiene en la corteza: sale disparada por el orificio del",
        "Polo Sur hacia el vacío.",
        "A través del cristal, observás la Tierra alejándose lentamente mientras",
        "te adentrás en el espacio infinito.",
        "FIN."
      ],
      image: "7final1",
      opciones: [{ l: "Volver al inicio", to: 0 }]
    },

    {
      id: "ave_ventisquero",
      title: "El Ventisquero",
      text: [
        "Escalás por los salientes de roca hacia la parte superior del abismo.",
        "Una corriente de aire cálido te envuelve y, a lo lejos, la enorme",
        "silueta de un ave mitológica cruza la caverna proyectando una",
        "sombra gigantesca."
      ],
      image: "8",
      opciones: [{ l: "Acercarte a su refugio", to: 8 }]
    },

    {
      id: "ave_nido",
      title: "El Nido del Ave — Elegí",
      text: [],
      image: "9",
      pantalladiv: true,
      divZonas: 2,
      niveles: ["Lomo del Ave", "Cueva de Cristal"],
      destinos: [9, 10],
      opciones: []
    },

    {
      id: "ave_vuelo",
      title: "Vuelo Directo",
      text: [
        "Te sujetás con fuerza de las plumas del ave mientras despega hacia",
        "las corrientes térmicas. El viento ruge a tu alrededor mientras",
        "ascienden a toda velocidad por la gran chimenea volcánica."
      ],
      image: "A10",
      opciones: [{ l: "Salir a la superficie", to: 11 }]
    },

    {
      id: "ave_cueva",
      title: "Cueva de Cristal",
      text: [
        "Te adentrás por el pasaje de cristales luminosos. Al llegar al extremo",
        "del precipicio, el ave gigante vuela a tu lado y extiende su ala",
        "para que saltes sobre ella en pleno vuelo."
      ],
      image: "B10",
      opciones: [{ l: "Ascender a la superficie", to: 11 }]
    },

    {
      id: "final2",
      title: "FINAL 2 — El Regreso al Mundo Exterior",
      text: [
        "El ave gigante emerge por la boca del glaciar y abre sus alas bajo",
        "el cielo brillante.",
        "Te deposita suavemente sobre la nieve de Groenlandia antes de",
        "perderse de nuevo en las profundidades.",
        "Estás a salvo y listo para contar la historia.",
        "FIN."
      ],
      image: "11final2",
      opciones: [{ l: "Volver al inicio", to: 0 }]
    },

    {
      id: "tribu_fortaleza",
      title: "La Fortaleza Raka",
      text: [
        "Te internás en la densa vegetación subterránea hasta tropezar con",
        "la fortaleza de la tribu Raka.",
        "Guerreros de piel azulada te rodean con lanzas, pero al ver que no",
        "tenés armas, te conducen ante el pergamino de su Gran Arton."
      ],
      image: "12",
      opciones: [{ l: "Leer el pergamino", to: 13 }]
    },

    {
      id: "tribu_rio",
      title: "El Valle del Gran Río",
      text: [
        "Los guerreros te llevan hasta las orillas del Gran Río que divide",
        "el mundo subterráneo.",
        "Del otro lado se divisan los asentamientos de los Archípodas.",
        "Un ambiente de tensión precede a lo que podría ser una guerra."
      ],
      image: "13",
      opciones: [{ l: "Convocar a ambas tribus", to: 14 }]
    },

    {
      id: "tribu_totem",
      title: "El Tótem de la Paz",
      text: [
        "Utilizando tus conocimientos de la superficie, lográs comunicar a",
        "ambos líderes frente al Tótem de los Ancestros.",
        "Tras horas de discusión bajo la luz del Sol Negro, ambas tribus",
        "acuerdan un tratado de paz."
      ],
      image: "14",
      opciones: [{ l: "Sellar la alianza", to: 15 }]
    },

    {
      id: "final3",
      title: "FINAL 3 — El Guardián del Reino Subterráneo",
      text: [
        "Los líderes de Rakas y Archípodas te entregan el amuleto del reino.",
        "Te has convertido en el diplomático de honor y protector de la paz",
        "subterránea, viviendo para siempre en un mundo maravilloso oculto",
        "bajo nuestros pies.",
        "FIN."
      ],
      image: "15final3",
      opciones: [{ l: "Volver al inicio", to: 0 }]
    }
  ];
}
