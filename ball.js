class Ball{

    constructor(x,y){


  var options ={
   restitution:0.5,
   friction:0.3,
   density:1.2,
         }
this.body = Bodies.circle(x,y,20,options);

World.add(world, this.body);

 }

display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 
 fill("green");
 circle(0, 0, 40);
 this.body.debug = true;
 pop();
}

}