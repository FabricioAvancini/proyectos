let sprV;
let sprA;
let sprR;
let sprAM;

let randomColor;

function pensarColor() {
  const colors = ['rojo', 'verde', 'azul', 'amarillo'];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  randomColor = pensarColor(); //Llamar a la funcion
  console.log(`El color elegido es: ${randomColor}`);

  //Sprite del color azul

  sprA = createSprite(600, 250,250, 200);
  sprA.shapeColor = color(0,100,250);
  sprA.onMousePressed = function() {
    this.shapeColor = color(0,0,255);
  }
  sprA.onMouseReleased = function() {
    this.shapeColor = color(0,100,250);
  }

  //Sprite del color verde

  sprV = createSprite(850, 250,250, 200);
  sprV.shapeColor = color(0,250,100);
  sprV.onMousePressed = function() {
    this.shapeColor = color(0,250,0);
  }
  sprV.onMouseReleased = function() {
    this.shapeColor = color(0,250,100);
  }

  //Sprite del color rojo

  sprR = createSprite(850, 450,250, 200);
  sprR.shapeColor = color(250,0,0);
  sprR.onMousePressed = function() {
    this.shapeColor = color(250,0,50);
  }
  sprR.onMouseReleased = function() {
    this.shapeColor = color(250,0,0);
  }

  //Sprite del color amarillo

  sprAM = createSprite(600, 450,250, 200);
  sprAM.shapeColor = color(255,255,0);
  sprAM.onMousePressed = function() {
    this.shapeColor = color(255,200,0);
  }
  sprAM.onMouseReleased = function() {
    this.shapeColor = color(255,255,0);
  }
}

function draw() {
  background(200);

 

  if (randomColor === "rojo") {
    sprR.shapeColor = color(250, 0, 0); // Ilumina el color rojo
  } else {
    sprR.shapeColor = color(150, 0, 0); // Si no se cumple cambiar a color rojo
  }

  if (randomColor === "azul") {
    sprA.shapeColor = color(0, 0, 250); // Ilumina el color azul
  } else {
    sprA.shapeColor = color(0,0,150); // Si no se cumple cambiar a color azul
  }

  if (randomColor === "verde") {
    sprV.shapeColor = color(0, 250, 0); // Ilumina el color verde
  } else {
    sprV.shapeColor = color(0,150,0); // Si no se cumple cambiar a color verde
  }

  if (randomColor === "amarillo") {
    sprAM.shapeColor = color(250, 250, 0); // Ilumina el color amarillo
  } else {
    sprAM.shapeColor = color(150,150,0); // Si no se cumple cambiar a color amarillo
  }

  
  drawSprites();
  }

