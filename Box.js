class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
     
      if(this.body.speed>5){
        
        World.remove(world,this.body)
        
     }
    
     else{

      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);


     }

    }
  };     