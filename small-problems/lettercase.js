/*
algorithm:
  -create an array from the string
  -create an object with three keys
  -create a for loop through the string
    -if the index is equal to index.toLowerCase
      -incriment the lowercase key by one
    -if the index is equal to index.toUpperCase
      -incriment the uppercase key by one
    -else
      -incriment the neither ket by one
  -return the object
*/

function letterCaseCount(string) {
  let caseCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      caseCount.lowercase++;
    } else if ((char >= 'A') && (char <= 'z')) {
      caseCount.uppercase++;
    } else {
      caseCount.neither++;
    }
  }
  return caseCount;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }