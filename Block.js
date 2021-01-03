class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      this.Visibility=255;
    }
    display(){
      if(this.body.speed<3){
        super.display();
      
      }else{
      World.remove(world,this.body);
      push ();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      rectMode(CENTER);
      //rect(0,0,this.width, this.height);
      pop ();
      }
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
      }
     }
  
  };