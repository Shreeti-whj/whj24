class Box2
{

 constructor(x,y)
 
 {
   var options = {
    
    isStatic : true
   }
   
 this.body=Bodies.rectangle(x,y,135,15, options);
 this.width=150;
 this.height=15;
 World.add(world,this.body);

 }


   display()
  {
   var pos=this.body.position;
   var angle=this.body.angle;
   push();
   translate(pos.x,pos.y);
   rectMode(CENTER)
    fill("red");
    
    rect(0,0,this.width,this.height);

   pop();
  }
}