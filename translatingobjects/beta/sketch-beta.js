var bunke03;
var sten;
var bunke02;
var ormler;
var bunke06;
var translating;

function preload() {
    bunke03 = loadImage('bunke03.jpg');
    sten = loadImage('sten.jpg');
    bunke02 = loadImage('bunke02.jpg');
    ormler = loadImage('orm-ler.jpg');
    bunke06 = loadImage('bunke06.jpg');
    translating = loadImage('translating02.png');
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style("z-index", "-1");

    
}

function draw() {
    background(234, 224, 212);
    
    
//    let camZ = map(0, 0, mouseZ, width, 0, 0);
    let camX = map(mouseX, 150, width, -400, 0);
//    camera(camX, 0, height/2) / tan(PI/6), 0, 0, 0, 0, 1, camZ);
    camera(camX, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
    
    
    
    /////////////////////// LYS ///////////////////////

//    directionalLight(255, 255, 255, 1, 0, -2);
//    directionalLight(255, 255, 255, 1, 0, 0);
//    directionalLight(200, 200, 200, 0, 1, 0);
//    ambientLight(255);
    

    /////////////////////// OBJEKTER ///////////////////////
    
    
    push();
    
        translate(950, 150, -200);
        rotateY(1.3);
    
//        noStroke();
//        ambientMaterial(220);
        texture(bunke03);
        plane(300, 174);
    
    pop();
    
    push();
    
        translate(150, 250, -300);
        rotateY(2.2);
    
//        noStroke();
//        ambientMaterial(220);
        texture(sten);
        plane(300, 174);
    
    pop();
    
    
    push();
    
        translate(450, -150, -200);
        rotateY(2.8);
    
//        noStroke();
//        ambientMaterial(100);
        texture(bunke02);
        plane(300, 181);
    
    
    
    pop();
    
    push();
    
        translate(550, 350, 0);
        rotateY(-2.8);
    
//        noStroke();
//        ambientMaterial(220);
        texture(ormler);
        plane(400, 288);
    
    
    
    pop();
    
    
    push();
    
        translate(-500, -150, -200);
        rotateY(-2.5);
    
//        noStroke();
//        ambientMaterial(220);
        texture(bunke06);
        plane(400, 324);
    
    pop();
    
    push();
    
        translate(-150,-200,0);
        rotateY(-0.6);
    
//        noStroke();
//        ambientMaterial(220);
        fill(0,0,0,0);
        texture(translating);
        plane(450, 183);
    
    pop();
    
}
