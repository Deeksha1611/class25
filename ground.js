class GROUND {
    constructor(x,y,w,h){
        var ground_options = {
            isStatic: true
          }
        this.ground=Bodies.rectangle(x,y,w,h,ground_options);
        this.width=w;
        this.height=h;
        World.add(myworld,this.ground);

        

    }

    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);

    }
    


}