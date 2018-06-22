let angle = 0;

var logo;

function preload() {
    logo = loadModel('../obj/logo08.obj');
}
function setup() {
    createCanvas(500, 200, WEBGL);
}

function draw() {

    let camX = map(mouseX, 0, width, 250, 100);
    let camY = map(0, mouseY, height, 250, 100);
    camera(camX, camY, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);

    /////////////////////// LYS ///////////////////////

   directionalLight(255, 255, 255, 1, 0, -2);
   directionalLight(255, 255, 255, -1, 0, 0);
   directionalLight(200, 200, 200, 0, 1, 0);

   background(242);

    /////////////////////// OBJEKTER ///////////////////////
    push();

  translate(-150,0,0);
  // rotateY(0.4);


    scale(2.5);
    noStroke();
     ambientMaterial(255);
//    ambientMaterial(0);

    model(logo);

    pop();

}
