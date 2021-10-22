// interface Shape{
//     x: number;
//     y: number;
// }
// class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        //..
        console.log(this.x.toString());
        console.log(this.y.toString());
    };
    return Shape;
}());
// object
var shape = new Shape();
shape.x = 10;
shape.y = 20;
shape.draw();
