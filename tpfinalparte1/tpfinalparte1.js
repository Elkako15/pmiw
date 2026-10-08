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
