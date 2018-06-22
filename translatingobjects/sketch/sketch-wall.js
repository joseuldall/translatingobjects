let angle = 0;

var wall;

function preload() {
    wall = loadModel('../obj/wall.obj');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    
    /////////////////////// LYS ///////////////////////

    directionalLight(255, 255, 255, 1, 0, -2);
    directionalLight(255, 255, 255, 1, 0, 0);
    directionalLight(200, 200, 200, 0, 1, 0);
    
    background(235, 235, 234);

    /////////////////////// OBJEKTER ///////////////////////
    push();
  
        noStroke();
        ambientMaterial(255, 181, 64);
        
        rotate(0.2);
        translate(200, -200, 0);
        scale(mouseY, mouseX, 15);
        scale(20);
        model(wall);
  
    pop();

    ///////////////////// RUMMET - PODIET ///////////////////////
    
//    push();
//    
//        translate(0,400,-100);
//        rotateY(0.01);
//    
//        noStroke();
//        ambientMaterial(220);
//        box(500);
//    
//    pop();
    
}
