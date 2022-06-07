'use strict'

import car from "/car.js";
import controls from "/controls.js";

const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(50,50,16,25);

car.draw(ctx);

// animate();

// function animate(){
//     car.update();
    
//     canvas.height=window.innerHeight;
//     car.draw(ctx);
//     requestAnimationFrame(animate);
// }
