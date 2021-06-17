//Using the forEach method, write some code to output all vowels from the strings in the arrays. 
//Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        //console.log(char);
      }
    })
  })
})

//Given the following data structure, return a new array with the same structure, 
//but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- 
//in ascending order.


let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.sort((a, b) => b - a);
  } else {
    return subArr.sort((a, b) => b - a);
  }
})

//console.log(arr);

//Given the following data structure, use the map method to return a new array
//identical in structure to the original but, with each number incremented by 1. 
//Do not modify the original data structure.

let arr1 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr1.slice().map(subArr => {
   let incrementObj = {};

   for (let key in subArr) {
     incrementObj[key] = subArr[key] + 1;
   }
   return incrementObj;
})
//console.log(arr1);
//console.log(newArr);

//Given the following data structure, use a combination of methods, including filter, 
//to return a new array identical in structure to the original, 
//but containing only the numbers that are multiples of 3.

let arr2 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr2 = arr2.slice().map(arr => {
  return arr.filter(num => num % 3 === 0);
});

console.log(arr2);
console.log(newArr2);