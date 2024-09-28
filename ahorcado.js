let randomPalabra;

function pensarPalabra() {
    const palabras = ["casa", "perro", "gato", "sol", "luz", "mar", "nube", "flor", "libro", "mesa",
    "auto", "piedra", "llave", "puerta", "pared", "techo", "bici", "cielo", "hoja",
    "calle", "parque", "pasto", "gafas", "pluma", "roca", "fuego", "agua", "tierra",
    "viento", "lago", "avion", "barco", "tren", "nieve", "salud", "piano", "reloj",
    "vino", "pan", "sal", "sol", "luna", "cine", "serie", "carta", "traje", "silla",
    "rosa", "radio", "lento", "fresa", "tiza", "lobo", "raton", "dado"];
  
    const randomIndex = Math.floor(Math.random(0,palabras.length));
    return palabras[randomIndex];
  } 
    

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0,100,200);
    input = createInput('');
    input.position(250, 650);
    input.size(300);

    randomPalabra = pensarPalabra(); //Llamar a la funcion
    console.log(`La palabra pensada es: ${randomPalabra}`);
    
}

function draw() {
    fill(100,100,100);
    rect(0,600,1520,20);
    rect(950,0,20,600);
}

    function ubicar() {
        if(input.value === palabras){
        console.log();
    }
    
}
    

