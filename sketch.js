let img;
let myFont;
function preload() {
  img = loadImage('assets/Adulto.png');
  myFont = loadFont('assets/CherryHand-Regular.ttf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  frameRate(18);
  textSize(45);
  fill(3, 1, 179);
  text('¿Cómo se supone que se comporta un adulto?', 140, 850);
  text('¿Cómo se supone que se comporta un adulto?', 150, 860);
  text('¿Cómo se supone que se comporta un adulto?', 110, 870);
  text('¿Cómo se supone que se comporta un adulto?', 90, 880);
  text('¿Cómo se supone que se comporta un adulto?', 70, 890);
  text('¿Cómo se supone que se comporta un adulto?', 50, 900);
  text('¿Cómo se supone que se comporta un adulto?', 20, 910);
  textSize(65);
  frameRate(10);
  fill(0, 147, 255);
  text('¿Cómo se supone que se comporta un adulto?', random(25, 480), 390);
  text('¿Cómo se supone que se comporta un adulto?', random(25, 480), 390);
  textSize(85);
  fill(193, 0, 255);
  text('¿Cómo se supone que se comporta un adulto?', random(55, 440), 300);
  textSize(78);
  fill(255, 46, 0);
  text('¿Cómo se supone que se comporta un adulto?', random(5, 400), 430);
  textSize(42);
  fill(2, 0, 0);
  text('¿Cómo se supone que se comporta un adulto?', 90, random(1470, 90));
  //frameRate(5)
}






