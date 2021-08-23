//Write a function that takes a string consisting of zero or more space separated words
//and returns an object that shows the number of words of different sizes.
//Words consist of any sequence of non-space characters.

//input: string
//output: object
//seperate sting into words (possible array)
//iderate over the words to count the letters
//create object:
//  key = number of letters
//  value = number of words with that amount of letters

let wordSizes = string => {
  let newString = string.replace("'",'').replace('?', '').replace('.', '').replace(',', '').replace('!', '').split(' ');
  let stringObject = {};
  console.log(newString);

  for (let index = 0; index < newString.length; index++) {
    let wordSize = newString[index].length;
      if (wordSize === 0) continue;

      if (!stringObject[wordSize]) {
        stringObject[wordSize] = 0;
      }
      stringObject[wordSize] += 1;
  }
  console.log(stringObject);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}