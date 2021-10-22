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
interface IShape{
    x: number;
    y: number;
    draw(): void; 
}


// class
class Shape implements IShape {
    x: number;
    y: number;
    
    draw() {
        //..
        console.log(this.x.toString());
        console.log(this.y.toString());
    }
}


// object
let shape = new Shape();
shape.x = 10;
shape.y = 20;
shape.draw();