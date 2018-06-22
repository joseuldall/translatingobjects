let angle = 0;

var sten;

function preload() {
    sten = loadModel('../obj/sten.obj');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    
    
    
    /////////////////////// LYS ///////////////////////

    directionalLight(255, 255, 255, 1, 0, -2);
    directionalLight(255, 255, 255, -1, 0, 0);
    directionalLight(200, 200, 200, 0, 1, 0);
    
    background(235, 235, 234);

    /////////////////////// OBJEKTER ///////////////////////
    push();
  
//        translate(0, -100, 0)
        noStroke();
        ambientMaterial(193, 232, 179);
    
        angle += 0.02;
        rotateY(angle-mouseY/10);
        rotateX(angle-mouseX/10);
    
        scale(85);
        model(sten);
  
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




