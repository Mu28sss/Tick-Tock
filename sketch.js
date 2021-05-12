var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 

    //Using degrees in angles
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Caluculating the time from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //making seconds hand
    push();
    rotate(scAngle); 
    stroke(0,255,255);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //making mins hand
    push();
    rotate(mnAngle);
    stroke(0,255,200);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //making hr hand
    push();
    rotate(hrAngle);
    stroke(0,200,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    strokeWeight(10);
    noFill();
    
}