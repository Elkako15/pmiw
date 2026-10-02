let pantalla = 1;
let lineasCreditos = [];
let yTexto = -100;
const YsaleTexto = 550;
const velocidadTexto = 2;
let estadoCreditos = 'bajando';
function inicializarCreditos() {
  let textos = [
    "EL REINO SUBTERRÁNEO",
    "Basado en la obra de Edward Packard",
    "Carlos Adrian Puebla / Ailin Nahir Mercado",
    "Comisión 5 "
  ];
  return textos; // Retorna un arreglo (Igual que en tu TP1)
}
function cambiarEstadoCreditos(nuevoEstado) {
  estadoCreditos = nuevoEstado;
}
function actualizarEstadoCreditos() {
  if (estadoCreditos === 'bajando') {
    yTexto += velocidadTexto;
    if (yTexto > YsaleTexto) {
      pantalla = 2;
    }
  }
}

function dibujarTextoBasico(arregloTextos, posY) {
  push();
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255);

  let yActual = posY;
  for (let i = 0; i < arregloTextos.length; i++) {
    if (i === 0) {
      textSize(32);
    } else if (i === 1) {
      textSize(16);
    } else {
      textSize(18);
    }
    text(arregloTextos[i], width / 2, yActual);
    yActual += 45;
  }

  pop();
}
function preload() {
  
}
function setup() {
  createCanvas(800, 450);
  lineasCreditos = inicializarCreditos();
}
function draw() {
  background(15);
  if (pantalla === 1) {
    fill(20, 25, 35);
    rect(0, 0, width, height);
    actualizarEstadoCreditos();
    dibujarTextoBasico(lineasCreditos, yTexto);
  } else if (pantalla === 2) {
    background(10, 15, 25);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(22);
    text("PANTALLA 2: LA CAÍDA\n\nUna expedición al corazón de Groenlandia toma un giro aterrador...", width / 2, height / 2);
  }
}
function mousePressed() {
  if (pantalla === 1) {
    pantalla = 2;
  }
}
