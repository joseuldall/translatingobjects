let angle = 0;

var halvkugle;

function preload() {
    halvkugle = loadModel('../obj/halvkugle.obj');
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
        ambientMaterial(33, 67, 197);
        
        this.rotateY((this.mouseX - this.width / 2) / (this.width / 2));
        this.rotateX((this.mouseY - this.height / 2) / (this.width / 2));
        
        rotate(0.9);
        scale(80);
        model(halvkugle);
  
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
