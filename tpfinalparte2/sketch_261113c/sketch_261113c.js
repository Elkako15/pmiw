

//https://www.youtube.com/watch?v=b-JhNDYWW34


let juego;

let imgFondo;
let imgPersonajeDer, imgPersonajeIzq, imgPersonajeArriba;
let imgPiedras = [];
let imgInicio, imgGameOver, imgGanaste;

function preload() {
  imgFondo           = loadImage("data/fondo_juego.jpg");
  imgPersonajeDer    = loadImage("data/personaje_der.png");
  imgPersonajeIzq    = loadImage("data/personaje_izq.png");
  imgPersonajeArriba = loadImage("data/personaje_arriba.png");

  imgPiedras.push(loadImage("data/piedra1.png"));
  imgPiedras.push(loadImage("data/piedra2.png"));
  imgPiedras.push(loadImage("data/piedra3.png"));

  imgInicio   = loadImage("data/pantallainicio.jpg");
  imgGameOver = loadImage("data/gameover.jpg");
  imgGanaste  = loadImage("data/ganaste.jpg");
}

function setup() {
  createCanvas(800, 450);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.keyPressed();
}
