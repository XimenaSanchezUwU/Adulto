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
  text('¿Cómo se supone que se comporta un adulto?', 340, 650);
  text('¿Cómo se supone que se comporta un adulto?', 350, 660);
  text('¿Cómo se supone que se comporta un adulto?', 310, 670);
  text('¿Cómo se supone que se comporta un adulto?', 290, 680);
  text('¿Cómo se supone que se comporta un adulto?', 270, 690);
  text('¿Cómo se supone que se comporta un adulto?', 250, 700);
  text('¿Cómo se supone que se comporta un adulto?', 220, 710);
  textSize(75);
  frameRate(12);
  fill(0, 147, 255);
  text('¿Cómo se supone que se comporta un adulto?', random(125, 480), 390);
  text('¿Cómo se supone que se comporta un adulto?', random(125, 480), 390);
  textSize(85);
  fill(193, 0, 255);
  text('¿Cómo se supone que se comporta un adulto?', random(155, 440), 300);
  textSize(78);
  fill(255, 46, 0);
  text('¿Cómo se supone que se comporta un adulto?', random(105, 400), 430);
  textSize(42);
  fill(2, 0, 0);
  text('¿Cómo se supone que se comporta un adulto?', 90, random(970, 90));
  //frameRate(5)
}






