const readline = require('readline-sync');

console.log(`What is the length of the room in meters?`);
let roomLength = readline.question();
roomLength = parseInt(roomLength, 10);

console.log(`what is the width of the room in meters?`)
let roomWidth = readline.question();
roomWidth = parseInt(roomWidth, 10);

let area = (length, width) => {
  let squareMeter = length * width;
  let squareFoot = squareMeter * 10.7639;
  return console.log(`The area of the room is ${squareMeter.toFixed(2)} square meters (${squareFoot.toFixed(2)} square feet).
  `);
}

area(roomLength, roomWidth);