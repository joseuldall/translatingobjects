//let angle = 0;

var bue;

function preload() {
    bue = loadModel('../obj/bue.obj');
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
  
        translate(0, -100, 0)
        noStroke();
        ambientMaterial(254, 33, 33);
        
        this.rotateY((this.mouseX - this.width / 2) / (this.width / 2));
        this.rotateX((this.mouseY - this.height / 2) / (this.width / 2));

        scale(85);
        model(bue);
  
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
