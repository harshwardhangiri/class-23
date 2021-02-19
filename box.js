class BOX{
    constructor(x,y,width,height){
        var option={
            restitution:1.000
           }
           this.Body=Bodies.rectangle(x,y,width,height,option);
           this.width = width;
           this.height = height;
           World.add(world,this.Body);
    }

    display() {
        rectMode(CENTER);
        rect(this.Body.position.x,this.Body.position.y,this.width,this.height);
    }
}

