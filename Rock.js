class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;

      this.image = loadImage('rock1.png');
      World.add(myWorld,this.body);
    }
    show()
    {
        imageMode(CENTER);
        var pos = this.body.position;
        fill('BLACK');
        stroke("GREY");
        image(this.image,pos.x,pos.y,this.width, this.height);
    }
  
  
  }
  
