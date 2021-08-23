/*
Algorithm:
  -one input for string
  -create an empty array
  -create a for loop
    -if the string[index] % === 0
      -newArray.push(string[index].toUpperCase)
    -if the string{index] % === 1
      -newString.push(string[index].toLowerCase)
  -return newArray
*/

let staggeredCase = (string) => {
  return string.split("").map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join("");

}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);