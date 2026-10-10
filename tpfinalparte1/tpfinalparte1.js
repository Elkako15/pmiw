
//https://youtu.be/bpW7XB1YLl0
let imagenFinal4;
let imagenTotem;
let imagenRio;
let imagenFortaleza;
let imagenCueva;
let imagenFinal2;
let imagenNido;
let imagenFondoAbismo;
let imagenVentisquero;
let imagenNave;
let escenaActual = 0;
let imagenCaminos;
let imagenCaida;
let pantalla = 0;
let imagenCreditos;
let creditosY = 0;
let velocidadCreditos = 2;

let titulos = [
  "La Caída en la Sima",
  "El Fondo del Abismo",
  "Elige un camino",
  "Perdidos en el Espacio",
  "El Ventisquero",
  "El Nido del Ave",
  "Rescate en Groenlandia",
  "El Guardián de los Cristales",
  "La Selva Subterránea",
  "La Fortaleza",
  "El Valle del Río",
  "El Valle del Río",
  "Tótem de la Paz",
  "Protector del Reino"
];

let narraciones = [
  "El hielo cede bajo tus pies. Caes a través de la grieta oscura y despiertas en el fondo de la caverna.",
  "Recuperas el conocimiento sobre un lecho de musgo brillante. Ante ti se abren las profundidades del reino.",
  "Llegas a un cruce con tres caminos bien marcados. ¿Cuál elegirás?",
  "Abres la escotilla metálica e ingresas a la cabina de la nave Vertakraft. Al tocar los mandos, la nave despega automáticamente hacia las alturas, atravesando la atmósfera hasta quedar a la deriva en la inmensidad del espacio exterior.",
  "Escalas por las cornisas heladas del abismo hasta alcanzar una gran repisa de piedra.",
  "Te encuentras frente al majestuoso Ave Gigante. A su lado, la entrada a una resplandeciente Cueva de Cristal se abre en la pared de roca.",
  "Subes al lomo del ave. Con un batir de alas colosal, el animal te eleva por el cráter volcánico y te deposita sano y salvo sobre los glaciares de la superficie.",
  "Te adentras en la Cueva de Cristal. El destello de las gemas te hipnotiza y la entrada se sella tras de ti. Has descubierto la fuente de energía del mundo subterráneo, pero quedarás allí como su custodio eterno.",
  "Te adentras en una densa selva de hongos e iluminación natural.",
  "Llegas a las puertas de la Fortaleza de piedra Raka. Los guardianes te observan serenamente.",
  "Recorres el valle siguiendo el cauce del río subterráneo junto a los pobladores.",
  "Cruzas los puentes colgantes del valle adentrándote en el corazón de su comunidad.",
  "Llegas al centro de la aldea sagrada, frente al imponente Tótem de la Paz.",
  "Los ancianos Raka te otorgan la insignia sagrada. Ya no hay regreso a la superficie, pero te nombran el protector oficial del Reino Subterráneo."
];

function preload() {
  imagenFinal4 = loadImage("data/final4.jpg");
  imagenTotem = loadImage("data/totem.jpg");
  imagenRio = loadImage("data/rio.jpg");
  imagenFortaleza = loadImage("data/fortaleza.jpg");
  imagenCueva = loadImage("data/cueva.jpg");
  imagenFinal2 = loadImage("data/final2.jpg");
  imagenNido = loadImage("data/nido.jpg");
  imagenFondoAbismo = loadImage("data/fondoAbismo.jpg");
  imagenVentisquero = loadImage("data/ventisquero.jpg");
  imagenNave = loadImage("data/nave.jpg");
  imagenCreditos = loadImage("data/imagenCreditos.jpg");
  imagenCaida = loadImage("data/caida.jpg");
  imagenCaminos = loadImage("data/caminos.jpg");
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
}

function draw() {
  if (pantalla == 0) {
    dibujarCreditos();
  } else if (pantalla == 1) {
    dibujarEscena(escenaActual);
  }
}

function dibujarCreditos() {
  background(20);
  imageMode(CENTER);
  image(imagenCreditos, 400, -200 + creditosY);

  fill(255);
  textSize(45);
  text("EL REINO SUBTERRÁNEO", 400, 0 + creditosY);

  textSize(26);
  text("Basado en la obra original de Edward Packard", 400, 70 + creditosY);

  textSize(16);
  text("Carlos Adrian Puebla  Ailin Nahir Mercado / Comisión 5", 400, 140 + creditosY);

  creditosY += velocidadCreditos;

  if (creditosY > 800) {
    pantalla = 1;
    escenaActual = 0;
  }
}

function dibujarEscena(indice) {
  background(20);
    fill(255);
  textAlign(CENTER, CENTER);

 

  if (indice == 0) {
    imageMode(CORNER);
    image(imagenCaida, 0, 0, 800, 450);
    textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
  }

  if (indice == 1) {
    imageMode(CORNER);
    image(imagenFondoAbismo, 0, 0, 800, 450);
    textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
  }
  if (indice == 2) {
    
    imageMode(CORNER);
    image(imagenCaminos, 0, 0, 800, 450);
    textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Entrar por la escotilla", -150, 50, 600, 120);
    text("Subir hacia el Nido", 95, 50, 600, 120);
    text("Adentrarse en la Selva", 350, 50, 600, 120);
  
  }
  if (indice == 3) {
  imageMode(CORNER);
  image(imagenNave, 0, 0, 800, 450);
 textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
}
if (indice == 4) {
  imageMode(CORNER);
  image(imagenVentisquero, 0, 0, 800, 450);
  textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
}
if (indice == 5) {
  imageMode(CORNER);
  image(imagenNido, 0, 0, 800, 450);
  textSize(32);
    text(titulos[indice], 400, 50);
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Vuelo directo", -80, 100, 600, 120);
    text("Entrar a la Cueva de Cristal", 310, 100, 600, 120);

}
if (indice == 6) {
  imageMode(CORNER);
  image(imagenFinal2, 0, 0, 800, 450);
  textSize(32);
    text(titulos[indice], 400, 50);  
    textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Haz click para Volver al Inicio");

}
if (indice == 7) {
  imageMode(CORNER);
  image(imagenCueva, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Haz click para Volver al Inicio");
}
if (indice == 8) {
  imageMode(CORNER);
  image(imagenFortaleza, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    text("Haz click para Volver al Inicio");
  }
  if (indice == 9) {
  imageMode(CORNER);
  image(imagenRio, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
 
  }
  if (indice == 10) {
  imageMode(CORNER);
  image(imagenTotem, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);
    
  }
  if (indice == 11) {
  imageMode(CORNER);
  image(imagenFinal4, 0, 0, 800, 450);
  textSize(32);
  text(titulos[indice], 400, 50);
   textSize(18);
    text(narraciones[indice], 100, 300, 600, 120);

  }

}


function mousePressed() {
  if (pantalla == 1) {

    if (escenaActual == 0) {
      escenaActual = 1; 
    } else 
          if (escenaActual == 1) {
             escenaActual = 2;
          } else 
                if (escenaActual == 2){ 
                    if  (mouseX < 267) {
                         escenaActual = 3;
                        } 
                    else 
                        if (mouseX < 534) {
                            escenaActual = 4;
                         } 
                          else {
                          escenaActual = 8;
                         }
                  }

              else if (escenaActual == 3) {
             pantalla = 0;
             creditosY = 0;
    }
    else if (escenaActual == 4) {
  escenaActual = 5;
  
}
    else if (escenaActual == 5){
         if(mouseX < 400)
             escenaActual = 6  
         else escenaActual = 7 ; 
                   
    } 
     else if (escenaActual == 6) {
     pantalla = 0;
     creditosY = 0;
    }
 
     else if (escenaActual == 7) {
     pantalla = 0;
     creditosY = 0;
    }
    else if (escenaActual == 8) {
  escenaActual = 9;
  }
   else if (escenaActual == 9) {
  escenaActual = 10;
  }
    else if (escenaActual == 10) {
  escenaActual = 11;
  }
     else if (escenaActual == 11) {
     pantalla = 0;
     creditosY = 0;
    }
 }
}
