// interface Shape{
//     x: number;
//     y: number;
// }

// function drawShape(shape: Shape) {
//     //..
//     console.log(shape.x.toString());
// }

// let shape: Shape;
// shape = {x: 10, y: 20};
// drawShape(shape);


// inteface
// interface IShape{
//     x: number;
//     y: number;
//     draw(): void; 
// }


// class


import { Shape } from "./shape";
// object
let shape = new Shape(10, 20);
let xValue = shape.x;
shape.x = -1;
shape.draw();