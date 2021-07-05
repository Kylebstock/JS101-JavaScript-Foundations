//Write a function named joinOr that produces the following results:
//for instance, it lets you specify different delimiters and different words for the last item

//Problem: 
  //function to take in three arguments; an array, a deliminator, and a final word for the last item
  //last item should default to 'or'
//Edge Cases/Examples:
  //empty array should return an empty string
  //single item arrays should exclude the deliminator and final word
  //two item arrays should just exclude the deliminator
//Data structrues:
  //input: array and strings
  //output: string
//Algorithm:
  //if input array is empty, return an empty string
  //if input array only has one value, return that value as a string
  //if input array has exactly two values, return those values separated by the join word; don't use delimiter
  //if input array has three or more values, return the concatenation of all of the values as follows:
  //Add the delimiter between each pair of values
  //Add the join word before the last value
//Code:

let joinOr = (arrayInput, delimiter = ', ', lastWord = 'or') => {
  switch (arrayInput.length) {
    case 0:
      return '';
    case 1:
      return `${arrayInput[0]}`;
    case 2:
      return arrayInput.join(` ${lastWord} `);
    default:
      return arrayInput.slice(0, arrayInput.length - 1).join(delimiter) + `${delimiter}${lastWord} ${arrayInput[arrayInput.length -1]}`;
  }
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"