
function multiplyAllPairs(array1, array2) {
  let newResult = [];

  array1.forEach(num1 => {
    array2.forEach(num2 => {
      newResult.push(num1 * num2);
    })
  })
  return newResult.sort((a, b) => a - b);
}



console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]