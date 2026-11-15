class Piedra {
  constructor() {
    this.posX = random(30, width - 30);
    this.posY = random(-400, -50);
    this.vel = random(1, 2.5);
    this.rota = false;

    this.numeroImagen = floor(random(3));
    this.ancho = random(35, 70);
    this.alto = this.ancho;

    this.angulo = 0;
    this.velAngular = random(-0.05, 0.05);
  }

  dibujar() {
    if (this.estaRota()) return;

    this.posY += this.vel;
    this.angulo += this.velAngular;

    translate(this.posX, this.posY);
    rotate(this.angulo);
    image(imgPiedras[this.numeroImagen], 0, 0, this.ancho, this.alto);
    resetMatrix();
  }

  romper() {
    this.rota = true;
  }

  estaRota() {
    return this.rota === true;
  }

  estaCercaDelPersonaje(personaje) {
    let radioPiedra = max(this.ancho, this.alto) * 0.45;
    let radioPersonaje = max(personaje.ancho, personaje.alto) * 0.45;
    return dist(personaje.posX, personaje.posY, this.posX, this.posY) < radioPiedra + radioPersonaje;
  }
}
