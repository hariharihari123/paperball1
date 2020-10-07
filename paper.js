class paper{
    constructor(x, y, radius,options){
    var options = {
    restitution:0.7,
    friction:1.0,
    density:1.0
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("paperi.png");
    World.add(world, this.body);
    }
    display ()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("red");
        image(this.image, 0, 0,47,47);
        pop();
    
    }
    };