/*
algorithm:
  -split the string into an array
  -create an empty array
  -loop through the array
    -index[0].toUpperCase
*/

function wordCap(string) {
  return string.split(" ").map(char => char[0].toUpperCase() + char.slice(1).toLowerCase()).join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'