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

interface IShape{
    x: number;
    y: number;
    draw(): void; 
}

function drawShape(shape: Shape) {
    //..
    console.log(shape.x.toString());
}

let shape: Shape;
shape = {x: 10, y: 20};
drawShape(shape);