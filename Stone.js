class Polygon{

  constructor(x, y, r)
  {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        
    
    }

  this.image = loadImage("polygon.png");

  this.x = x;
  this.y = y;
  this.r = r;
  this.body = Bodies.circle(x, y, r,options);
  
  
  World.add(world, this.body);

  }

  display()
  {
    var pos = this.body.position;
    var angle = this.body.angle;

    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);

    fill("lightgreen")
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r)
    //pop();
  }
}