function inicializarCreditos() {
  return [
    "EL REINO SUBTERRÁNEO",
    "Un cuento interactivo basado en la obra original de Edward Packard",
    "Proyecto desarrollado para p5.js",
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
  background(imgs[1]);  
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

  if (esc.pantalladiv) {
    dibujarPantallaDividida(esc);
    return;
  }

  if (imgs[esc.image]) {
    image(imgs[esc.image], 0, 0, width, height);
  }

  fill(0, 180);
  rect(0, 300, width, height - 300);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);
  textStyle(BOLD);
  text(esc.title, 18, 310);

  textStyle(NORMAL);
  textSize(14);
  let y = 340;
  for (let i = 0; i < esc.text.length; i++) {
    text(esc.text[i], 18, y, width - 36, 100);
    y += 18;
  }

  botonAreas = [];
  let btnW = 370;
  let btnH = 30;
  for (let i = 0; i < esc.opciones.length; i++) {
    let bx = 18 + (i % 2) * (btnW + 12);
    let by = 408 +(i / 2) * (btnH + 6);

    fill(71, 187, 178);
    rect(bx, by, btnW, btnH, 6);

    fill(20);
    textSize(13);
    textAlign(LEFT, CENTER);
    text(esc.opciones[i].l, bx + 10, by + btnH / 2);
    textAlign(LEFT, TOP);

    botonAreas.push({ x: bx, y: by, w: btnW, h: btnH, to: esc.opciones[i].to });
  }
}

function dibujarPantallaDividida(esc) {
  let zonas = esc.divZonas || 3;
  let anchoZona = width / zonas;

  if (imgs[esc.image]) {
    image(imgs[esc.image], 0, 0, width, height);
  } else {
    fill(20);
    rect(0, 0, width, height);
  }

  fill(0, 100);
  rect(0, 0, width, height);

  let etiquetas = esc.niveles || ["Zona A", "Zona B", "Zona C"];
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  for (let i = 0; i < zonas; i++) {
    let cx = anchoZona * i + anchoZona / 2;

    fill(0, 200);
    textSize(18);
    text(etiquetas[i], cx + 2, 72);

    fill(255);
    text(etiquetas[i], cx, 70);

  }

  stroke(255, 120);
  strokeWeight(2);
  for (let i = 1; i < zonas; i++) {
    line(anchoZona * i, 0, anchoZona * i, height);
  }
  noStroke();

  textAlign(CENTER, CENTER);
  fill(0, 200);
  textStyle(BOLD);
  textSize(20);
  text(esc.title, width / 2 + 2, height - 48);

  fill(255);
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

  if (esc.pantalladiv) {
    let zonas = esc.divZonas || 3;
    let anchoZona = width / zonas;

    let zonaClick = 0;
    if (mouseX > anchoZona)     zonaClick = 1;
    if (mouseX > anchoZona * 2) zonaClick = 2;

    let destino = esc.destinos[zonaClick];
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
