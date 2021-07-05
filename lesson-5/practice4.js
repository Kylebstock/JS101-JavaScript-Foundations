//Given the following data structure, sort the array so that the sub-arrays are ordered 
//based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.slice().sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
})

//console.log(arr);
//console.log(newArr);

//Given the following data structure write some code to return an array containing 
//the colors of the fruits and the sizes of the vegetables. 
//The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let capWord = word => {
  return word[0].toUpperCase() + word.slice(1);
}

let newObj = Object.values(obj).map(attribute => {
  if (attribute['type'] === 'fruit') {
    return attribute['colors'].map(char => capWord(char))
  } else {
    return attribute['size'].toUpperCase();
  }
})

//console.log(newObj);

//Given the following data structure, write some code to return an array 
//which contains only the objects where all the numbers are even.

let arr1 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]

