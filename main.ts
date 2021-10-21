// function log(message) {
//     console.log(message);
// }
// var message = "Salom dunyo";
// log(message);

// function someFunction() {
//     for (var i = 0; i<3; i++){
//         console.log(i);
//     }
//     console.log("oxirgi qiymat: " + i);
// }

// someFunction();



// typescriptga turlarni bildirish
// 1)
let city: string = "Abdulvoris";
city.italics();
// 2)
let shahar;
shahar = "toshkant";
shahar = (<string>shahar).localeCompare;
// 3)
let s;
s = "toshkant";
s = (s as string).normalize;
