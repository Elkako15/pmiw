
let fondo;
let titulo;
let framesCorrer = [];
const N_FRAMES = 15;
const ESCALA = 0.7;
let x = -80;
const PERSONAJE_Y = 430;
const VELOCIDAD = 3;
const VELOCIDAD_FONDO = 1;
const VELOCIDAD_ANIMACION = 5;
let movimientoFondo = 0;
let estado = 'espera';
let contador = 0;
const DURACION_ESPERA = 60;
function moverFondo() {

  if (estado === 'correr') {
    movimientoFondo -= VELOCIDAD_FONDO;
  }
}
function cargarAccion(nombre, cantidad) {

  let frames = [];

  for (let i = 1; i <= cantidad; i++) {
    frames.push(loadImage('data/' + nombre + '_' + i + '.png'));
  }
  return frames;
}
function elegirFrame(frames, velocidadAnimacion) {

  let indice = floor(frameCount / velocidadAnimacion) % frames.length;

  return frames[indice];
}
function cambiarEstado(nuevoEstado) {

  estado = nuevoEstado;
  contador = 0;
}

function actualizarEstado() {

  contador++;
  if (estado === 'espera' && contador > DURACION_ESPERA) {

    cambiarEstado('correr');
  } else if (estado === 'correr' && x > width + 80) {

    x = -80;
    cambiarEstado('espera');
  }
}

function moverSegunEstado() {

  if (estado === 'correr') {
    x += VELOCIDAD;
  }
}

function preload() {

  fondo = loadImage('data/fondo.png');
  titulo = loadImage('data/titulo.png');
  framesCorrer = cargarAccion('correr', N_FRAMES);
}
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(20);

  moverFondo();

  image(fondo, movimientoFondo, 0, 2900, 1200);

  imageMode(CENTER);
  image(titulo, width / 2, 100);
  actualizarEstado();
  moverSegunEstado();
  let frame = framesCorrer[0];
  if (estado === 'correr') {
    frame = elegirFrame(framesCorrer, VELOCIDAD_ANIMACION);
  }

  image(frame, x, PERSONAJE_Y, frame.width * ESCALA, frame.height * ESCALA);
}
