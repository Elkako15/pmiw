class Juego {
  constructor() {
    this.estado = "inicio";
    this.personaje = null;
    this.piedras = [];
    this.fondoY = 0;
    this.velocidadFondo = 2;
    this.fondoTerminado = false;
  }

  inicializarNivel() {
    this.personaje = new Personaje();
    this.piedras = [];
    this.agregarPiedras();
    this.fondoY = 0;
    this.velocidadFondo = 1.5;
    this.fondoTerminado = false;
  }

  agregarPiedras() {
    for (let i = 0; i < 20; i++) {
      this.piedras.push(new Piedra());
    }
  }

  keyPressed() {
    if (keyCode === ENTER || keyCode === RETURN) {
      this.avanzarEstado();
    }
  }

  avanzarEstado() {
    if (this.estado === "inicio") {
      this.inicializarNivel();
      this.estado = "jugando";
    } else if (this.estado === "gameover" || this.estado === "ganaste") {
      this.estado = "inicio";
    }
  }

  dibujar() {
    if (this.personaje === null) {
      this.inicializarNivel();
    }

    if (this.estado === "inicio") {
      this.dibujarInicio();
    } else if (this.estado === "jugando") {
      this.dibujarJuego();
    } else if (this.estado === "gameover") {
      this.dibujarGameOver();
    } else if (this.estado === "ganaste") {
      this.dibujarGanaste();
    }
  }

  dibujarInicio() {
    background(20);
    if (imgInicio) {
      image(imgInicio, width / 2, height / 2, 800, 450);
    } 
  }

  dibujarJuego() {
    this.dibujarFondo();
    this.personaje.dibujar();

    for (let i = 0; i < this.piedras.length; i++) {
      this.piedras[i].dibujar();
    }

    this.detectarColisiones();
    this.reciclarPiedras();

    if (!this.personaje.estaVivo()) {
      this.estado = "gameover";
      return;
    }

    if (this.fondoTerminado) {
      this.estado = "ganaste";
    }
  }

  dibujarFondo() {
    background(0);

    let anchoFondo = width;
    let altoFondo = imgFondo.height * (width / imgFondo.width);

    image(imgFondo, width / 2, this.fondoY + height - altoFondo / 2, anchoFondo, altoFondo);

    if (!this.fondoTerminado) {
      this.fondoY += this.velocidadFondo;
      if (this.fondoY >= altoFondo - height) {
        this.fondoTerminado = true;
      }
    }
  }

  detectarColisiones() {
    for (let i = 0; i < this.piedras.length; i++) {
      if (!this.piedras[i].estaRota() &&
          this.piedras[i].estaCercaDelPersonaje(this.personaje)) {
        this.personaje.dañar();
        this.piedras[i].romper();
      }
    }
  }

  reciclarPiedras() {
    for (let i = 0; i < this.piedras.length; i++) {
      if (this.piedras[i].posY > height + 100) {
        this.piedras[i] = new Piedra();
      }
    }
  }

  dibujarGameOver() {
    background(0);

    if (imgGameOver) {
      image(imgGameOver, width / 2, height / 2, 800, 450);
    }
  }

  dibujarGanaste() {
    background(0);

    if (imgGanaste) {
      image(imgGanaste, width / 2, height / 2, 800, 450);
    } 
  }
}
