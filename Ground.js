class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
          }
          this.b1=Bodies.circle(x,y,width,height,options)
          World.add(myWorld,this.b1);
  this.width=width
  this.height=height
  
        }
        display(){
            rectMode(RADIUS)
            rect(this.b1.position.x,this.b1.position.y,this.width,this.height)  
        }
        
}


