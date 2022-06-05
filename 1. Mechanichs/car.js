
class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // this.speed = 0;
        // this.acceleration = 0.2;
        // this.maxSpeed = 3;
        // this.friction = 0.05;
        // this.angle = 0;

        // this.controls = new Controls();
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}