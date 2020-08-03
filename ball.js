class Ball{
    constructor(x,y){
        var options= {
            restitution:0.5
        }
        this.body= Bodies.circle(x,y,20,options);
        this.r=20;
        this.color= color(random(1,255),random(1,255),random(1,255));
        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}