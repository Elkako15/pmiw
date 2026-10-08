let pantalla = 1;
let lineasCreditos = [];
let yTexto = -100;
const YsaleTexto = 550;
const velocidadTexto = 2;
let escenas = [];
let escenaIndex = 0;
let botonAreas = [];
let imgs = {};
function preload() {
  imgs['1']        = loadImage('data/1.jpg');
  imgs['2']        = loadImage('data/2.jpg');
  imgs['3']        = loadImage('data/3.jpg');
  imgs['4']        = loadImage('data/4.jpg');
  imgs['5']        = loadImage('data/5.jpg');
  imgs['6']        = loadImage('data/6.jpg');
  imgs['7final1']  = loadImage('data/7final1.jpg');
  imgs['8']        = loadImage('data/8.jpg');
  imgs['9']        = loadImage('data/9.jpg');
  imgs['A10']      = loadImage('data/A10.jpg');
  imgs['B10']      = loadImage('data/B10.jpg');
  imgs['11final2'] = loadImage('data/11final2.jpg');
  imgs['12']       = loadImage('data/12.jpg');
  imgs['13']       = loadImage('data/13.jpg');
  imgs['14']       = loadImage('data/14.jpg');
  imgs['15final3'] = loadImage('data/15final3.jpg');
}

function setup() {
  createCanvas(800, 450);
  textFont("Georgia");
  textAlign(LEFT, TOP);
  rectMode(CORNER);
  noStroke();
  frameRate(60);

  lineasCreditos = inicializarCreditos();
  escenas = inicializarEscenas();
}
function draw() {
  background(15);

  if (pantalla === 1) {
    dibujarIntro();
  } else if (pantalla === 2) {
    dibujarJuego();
  }
}

function inicializarCreditos() {
  return [
    "EL REINO SUBTERRÁNEO",
    "Basado en la obra original de Edward Packard",
    "Carlos Adrian Puebla / Ailin Nahir Mercado — Comisión 5"
  ];
}

function dibujarIntro() {
  fill(20, 25, 35);
  rect(0, 0, width, height);
  yTexto += velocidadTexto;
  if (yTexto > YsaleTexto) {
    pantalla = 2;
    return;
  }
  fill(255);
  textAlign(CENTER, CENTER);
  let yActual = yTexto;
  for (let i = 0; i < lineasCreditos.length; i++) {
    if (i === 0) {
      textSize(32);
    } else if (i === 1) {
      textSize(16);
    } else {
      textSize(18);
    }
    text(lineasCreditos[i], width / 2, yActual);
    yActual += 45;
  }
  textSize(12);
  fill(180);
  text("(Hacé clic en cualquier parte de la pantalla para comenzar la aventura...)",
    width / 2, height - 20);
  textAlign(LEFT, TOP);
}
function dibujarJuego() {
  let esc = escenas[escenaIndex];

  if (esc.splitScreen) {
    dibujarPantallaDividida(esc);
    return;
  }
  if (imgs[esc.image]) {
    image(imgs[esc.image], 0, 0, width, 320);
  } else {
    fill(20);
    rect(0, 0, width, 320);
    fill(200);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Imagen faltante: " + esc.image, width / 2, 160);
    textAlign(LEFT, TOP);
  }
  fill(0, 200);
  rect(0, 320, width, 130);
  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);
  textStyle(BOLD);
  text(esc.title, 18, 330);
  textStyle(NORMAL);
  textSize(14);
  let y = 360;
  for (let i = 0; i < esc.text.length; i++) {
    text(esc.text[i], 18, y, width - 36, 100);
    y += 18;
  }
  botonAreas = [];
  let btnW = 370;
  let btnH = 34;
  for (let i = 0; i < esc.choices.length; i++) {
    let bx = 18 + (i % 2) * (btnW + 12);
    let by = 415 + Math.floor(i / 2) * (btnH + 6);
    fill(71, 187, 178);
    rect(bx, by, btnW, btnH, 6);
    fill(20);
    textSize(13);
    textAlign(LEFT, CENTER);
    text(esc.choices[i].l, bx + 10, by + btnH / 2);
    textAlign(LEFT, TOP);
    botonAreas.push( {
    x:
    bx, y:
    by, w:
    btnW, h:
    btnH, to:
      esc.choices[i].to
    }
    );
  }
}
function dibujarPantallaDividida(esc) {
  let zonas = esc.splitZones || 3;
  let anchoZona = width / zonas;
  if (imgs[esc.image]) {
    image(imgs[esc.image], 0, 0, width, height);
  } else {
    fill(20);
    rect(0, 0, width, height);
  }
  fill(0, 100);
  rect(0, 0, width, height);
  let etiquetas = esc.splitLabels || ["Zona A", "Zona B", "Zona C"];
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  for (let i = 0; i < zonas; i++) {
    let cx = anchoZona * i + anchoZona / 2;
    fill(40, 50, 70, 180);
    rect(anchoZona * i + 6, 40, anchoZona - 12, height - 140, 8);
    fill(255);
    textSize(18);
    text(etiquetas[i], cx, 70);
    textSize(12);
    fill(200);
    text("(clic aquí)", cx, height - 90);
  }
  stroke(255, 120);
  strokeWeight(2);
  for (let i = 1; i < zonas; i++) {
    line(anchoZona * i, 0, anchoZona * i, height);
  }
  noStroke();
  textAlign(CENTER, CENTER);
  fill(255);
  textStyle(BOLD);
  textSize(20);
  text(esc.title, width / 2, height - 50);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
}
function mousePressed() {
  if (pantalla === 1) {
    pantalla = 2;
    return;
  }

  let esc = escenas[escenaIndex];
  if (esc.splitScreen) {
    let zonas = esc.splitZones || 3;
    let anchoZona = width / zonas;
    let zonaClic = Math.floor(mouseX / anchoZona);
    zonaClic = constrain(zonaClic, 0, zonas - 1);
    let destino = esc.splitTargets[zonaClic];
    if (destino !== undefined) {
      escenaIndex = destino;
    }
    return;
  }
  for (let a of botonAreas) {
    if (mouseX >= a.x && mouseX <= a.x + a.w &&
      mouseY >= a.y && mouseY <= a.y + a.h) {
      escenaIndex = a.to;
      return;
    }
  }
}
function inicializarEscenas() {
  return [
  { id: "portada",
    title:"El Reino Subterráneo",
    text: ["Hacé clic para comenzar la aventura."],
    image:"1",
    choices:[ { l: "Comenzar la aventura", to: 1 } ]
  }
  ,
  {
  id:"caida",
    title:"La Caída",
    text:["Una expedición al corazón de Groenlandia toma un giro aterrador.",
      "El suelo de hielo cede bajo tus pies y sentís la ingravidez absoluta",
      "mientras caés por una sima insondable.",
      "El viento helado silba en tus oídos y la luz se apaga sobre ti."],
    image:"2",
    choices:
    [ { l: "Continuar descendiendo...", to: 2 } ]
  }
  ,
  { id:"fondo",
    title:"El Fondo del Abismo",
    text:["Tras una caída que pareció eterna, aterrizás sobre una suave alfombra",
      "de musgo fosforescente en las profundidades de la Tierra.",
      "El frío del exterior desaparece, reemplazado por un aire tibio y un",
      "zumbido electromagnético que resuena en las paredes de roca."],
    image: "3",
    choices:[ { l: "Inspeccionar la caverna...", to: 3 } ]
  }
  ,
  { id: "encrucijada",
    title:"Elegí un camino",
    text:[],
    image: "4",
    splitScreen:true, splitZones: 3,splitLabels:
    ["Nave Vertakraft", "Nido del Ave", "Selva de Hongos"],
    splitTargets:[4, 7, 12],
    choices:[]
  }
  ,
  {
  id: "nave_lab",
    title:"La Nave Vertakraft — Laboratorio",
    text:[ "Entrás en la cámara helada de la nave Vertakraft.",
      "Los paneles de control parpadean con luces de emergencia y sobre",
      "la mesa descansan los diarios del Profesor Bruckner.",
      "Un motor oculto vibra intensamente bajo tus pies." ],
    image: "5",
    choices:[ { l: "Tomar el control de la nave", to: 5 } ] },
  {
  id: "nave_cabina", title: "La Cabina", text:
    [ "Te acomodás en el asiento del piloto. La nave se sacude mientras",
      "desciende por un conducto magnético que atraviesa el manto terrestre.",
      "El indicador de gravedad oscila sin control hacia valores negativos."],
    image: "6",
    choices: [ { l: "Activar los propulsores de rescate", to:6 } ]
  }
  ,
  { id: "final1", title: "FINAL 1 — Rumbo a las Estrellas",
    text:[ "La palanca de emergencia activa los cohetes de inversión a máxima potencia.",
      "La nave no se detiene en la corteza: sale disparada por el orificio del",
      "Polo Sur hacia el vacío.",
      "A través del cristal, observás la Tierra alejándose lentamente mientras",
      "te adentrás en el espacio infinito.",
      "FIN." ],
    image:
    "7final1", choices:[ { l: "Volver al inicio", to: 0}]
  }
  ,
  { id: "ave_ventisquero",
    title:
    "El Ventisquero", text:
    ["Escalás por los salientes de roca hacia la parte superior del abismo.",
      "Una corriente de aire cálido te envuelve y, a lo lejos, la enorme",
      "silueta de un ave mitológica cruza la caverna proyectando una",
      "sombra gigantesca."],
    image:"8",
    choices:[ { l: "Acercarte a su refugio", to: 8 }]
  }
  ,
  { id: "ave_nido", title:  "El Nido del Ave — Elegí",
    text:[],
    image:"9",
    splitScreen: true,
    splitZones:2,
    splitLabels: ["Lomo del Ave", "Cueva de Cristal"],
    splitTargets:[9, 10],
    choices:[]
  }
  ,
  { id: "ave_vuelo",
    title: "Vuelo Directo",
    text:[ "Te sujetás con fuerza de las plumas del ave mientras despega hacia",
      "las corrientes térmicas. El viento ruge a tu alrededor mientras",
      "ascienden a toda velocidad por la gran chimenea volcánica." ],
    image: "A10",
    choices:[ {l:"Salir a la superficie", to:11  } ]
  }
 ,
  {id:"ave_cueva",
    title:  "Cueva de Cristal",
    text: [ "Te adentrás por el pasaje de cristales luminosos. Al llegar al extremo",
      "del precipicio, el ave gigante vuela a tu lado y extiende su ala",
      "para que saltes sobre ella en pleno vuelo."],
    image: "B10",
    choices:[ { l:"Ascender a la superficie", to:11} ]
  }
  ,
  { id:
    "final2",
    title: "FINAL 2 — El Regreso al Mundo Exterior",
    text:["El ave gigante emerge por la boca del glaciar y abre sus alas bajo",
      "el cielo brillante.",
      "Te deposita suavemente sobre la nieve de Groenlandia antes de",
      "perderse de nuevo en las profundidades.",
      "Estás a salvo y listo para contar la historia.",
      "FIN."],
    image:"11final2",
    choices:[ { l: "Volver al inicio", to:0 } ]
  } 
  , 
  { id: "tribu_fortaleza", title:  "La Fortaleza Raka",
    text:["Te internás en la densa vegetación subterránea hasta tropezar con",
      "la fortaleza de la tribu Raka.",
      "Guerreros de piel azulada te rodean con lanzas, pero al ver que no",
      "tenés armas, te conducen ante el pergamino de su Gran Arton."],
      
    image:"12",
    choices: [ { l: "Leer el pergamino", to: 13 }]
  }
  ,
  { id:"tribu_rio",
    title:"El Valle del Gran Río",
    text:["Los guerreros te llevan hasta las orillas del Gran Río que divide",
      "el mundo subterráneo.",
      "Del otro lado se divisan los asentamientos de los Archípodas.",
      "Un ambiente de tensión precede a lo que podría ser una guerra."],
    
    image:"13", 
    choices:[ { l: "Convocar a ambas tribus", to:14 } ]
 }
  ,
  { id: "tribu_totem",
    title:"El Tótem de la Paz",
    text:[ "Utilizando tus conocimientos de la superficie, lográs comunicar a",
      "ambos líderes frente al Tótem de los Ancestros.",
      "Tras horas de discusión bajo la luz del Sol Negro, ambas tribus",
      "acuerdan un tratado de paz."],
    image: "14",
    choices:[ { l:"Sellar la alianza", to:15 } ]
  }
  ,
  
  {id: "final3",
    title: "FINAL 3 — El Guardián del Reino Subterráneo",
    text:["Los líderes de Rakas y Archípodas te entregan el amuleto del reino.",
      "Te has convertido en el diplomático de honor y protector de la paz",
      "subterránea, viviendo para siempre en un mundo maravilloso oculto",
      "bajo nuestros pies.",
      "FIN."],
      
    image: "15final3",
    choices: [ { l:"Volver al inicio", to:0 }]
  }
  ];
}
