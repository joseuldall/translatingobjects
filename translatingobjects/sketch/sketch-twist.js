let angle = 0;

var twist;

function preload() {
    twist = loadModel('../obj/twist.obj');
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

        translate(mouseX/9, mouseX/8, mouseY/7)
        noStroke();
        ambientMaterial(66, 171, 161);

        scale(80);
        model(twist);

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
