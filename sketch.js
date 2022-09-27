let pg;
let bugs = []; // array of Jitter objects
var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = 0.1;

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  noStroke();
  background (0);
  
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(400, 250);
  centerX = width/2;
centerY = height/2;
noStroke();
  // Create objects
  
  
  for (let i = 0; i < 50; i++) {
   
    bugs.push(new Jitter());
    
  }
}

function draw() {
  fill(0,12);
  
  fill(255,mouseX/2,mouseY/2);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  
  background(50, 76, 100);
  
  translate(width / 2, height / 2);

  noFill();
  
  stroke(255, mouseY*.1);
  strokeWeight(mouseY*.001);
  scale(mouseY);


  beginShape();
  
  for (let t = 0; t < TWO_PI; t += 0.01) {
    let x = 5*pow(sin(t),3);
    let y = -(4*cos(t) - 2*cos(2*t) - cos(3*t));
   
    vertex(x,y); 
    
     
  }
  endShape(CLOSE);

  
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
    
  }
  
}

// Jitter class
class Jitter {
    constructor() {
      this.x = random(width);
      
      this.y = random(height);
      this.diameter = (3, 30);
      this.speed = 15;
      let num = 50;
while (num > 23) {
  num = num - 50;
  blendMode(LIGHTEST);
  
  console.log(num);
}


    }
  
    move() {
      this.x += random(-this.speed, this.speed);
      this.y +=this.speed/2;
      this.y += random(-this.speed, this.speed);
      fill((random(0,255)),(random(0,255)),(random(0,255)), 30)

      if (this.y > windowHeight) {
        this.y=0;
      }
    }
  
      display() {
        



      ellipse(this.x, this.y, this.diameter, this.diameter);
      
      ellipseMode(CENTER);
fill(100);
col.r = random(0, 200);
  col.g = random(0, 250);
  col.b = random(100, 250);
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  fill(col.r, col.g, col.b);
  noStroke();

  ellipse(x, y, 5, 5);
  angle += speed;
  scalar += speed;
ellipse(x, y, 5, 5); // Inner gray ellipse

    }

    
  }
  