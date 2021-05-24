let numbers = [1, 2, 3, 4, 5];
//numbers.reverse();
//let reverseNumbers = numbers.slice().reverse();
//console.log(reverseNumbers); // [ 5, 4, 3, 2, 1 ]


//numbers = [1, 2, 3, 4, 5];
//numbers.sort((num1, num2) => num2 - num1);
let reverseArray = [];
numbers.forEach((number) => {
  reverseArray.unshift(number)
});


console.log(reverseArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]