class Box{
    constructor(x,y,width,height){
        //properties
        var options={
            isStatic:true,
          }
         this.ball=Bodies.rectangle(x,y,width,height,options);
         World.add(myWorld,this.ball);
         this.width=width;
         this.height=height;
    }
    display(){//functions
    var pos=this.ball.position;
    rectMode(CENTER);
    fill ("orange")
    rect(pos.x,pos.y,this.width,this.height) ; 
    }

}