var hr,mn,sec;
var hrAngle,mnAngle,secAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  hr = hour()
  mn = minute();
  sec = second();
  
  secAngle = map(sec,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  fill("black");
  ellipse(0,0,190,190);
  
  push();

 rotate(secAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,80,0);
 pop();

 push();

 rotate(mnAngle);
 stroke(150,0,0);
 strokeWeight(7);
 line(0,0,75,0);
 pop();

 push();

 rotate(hrAngle);
 stroke(100,0,0);
 strokeWeight(7);
 line(0,0,50,0);
 pop();

stroke(255,0,0);
point(0,0);
strokeWeight(10)
noFill();
arc(0,0,300,300,0,secAngle);

stroke(150,0,0);
point(0,0);
strokeWeight(10)
noFill();
arc(0,0,260,260,0,mnAngle);

stroke(100,0,0);
point(0,0);
strokeWeight(10)
noFill();
arc(0,0,220,220,0,hrAngle);



  drawSprites();
}