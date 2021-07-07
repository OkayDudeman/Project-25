class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:200,  
            density:1.2
            }

            this.image = loadImage("paper.png")
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);

    }
    display()
    {
            
            var paperpos=this.body.position;        

            push()
            translate(paperpos.x, paperpos.y);
           // rectMode(CENTER)

// You dont need stroke weight and ellipse now. Since you have the image file with uou. Use the image instruction to display the paper image. imageMOde(CENTER)            strokeWeight(3);
          //  fill(255,0,255)
           image(this.image,0,0,this.r,this.r)
            pop()
            
    }

}
