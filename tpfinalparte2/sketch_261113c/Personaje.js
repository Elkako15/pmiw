class Personaje {
  constructor() {
    this.posX = width / 2;
    this.posY = height - 80;
    this.vel = 5;
    this.cantidadVidas = 3;
    this.direccion = "der";
    this.ancho = 60;
    this.alto = 60;
  }

  mover() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += this.vel;
      this.direccion = "der";
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= this.vel;
      this.direccion = "izq";
    }
    if (keyIsDown(UP_ARROW)) {
      this.posY -= this.vel;
      this.direccion = "arriba";
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.posY += this.vel;
    }
  }

  dibujar() {
    this.mover();

    let img = imgPersonajeDer;
    if (this.direccion === "izq") img = imgPersonajeIzq;
    if (this.direccion === "arriba") img = imgPersonajeArriba;

    image(img, this.posX, this.posY, this.ancho, this.alto);
  }

  dañar() {
    this.cantidadVidas--;
  }

  estaVivo() {
    return this.cantidadVidas > 0;
  }
}
