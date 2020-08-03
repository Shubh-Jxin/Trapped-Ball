class Wall{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.color= color(random(1,255),random(1,255),random(1,255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }

}