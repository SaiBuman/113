function preload() {
}

function setup() {
  canvas = createCanvas(500, 400);
  canvas.position(400,200);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 75, 75, 350,250);
  fill("red");
  circle(50,50,100);
  fill("green");
  rect(100,30,300,40);
  fill("red");
  circle(450,50,100);
  fill("green");
  rect(30,100,40,200);
  fill("red");
  circle(50,350,100);
  fill("green");
  rect(100,330,300,40);
  fill("green");
  rect(430,100,40,200);
  fill("red");
  circle(450,350,100);
}

function take_snapshot(){    
  save('student_name.png');
}


