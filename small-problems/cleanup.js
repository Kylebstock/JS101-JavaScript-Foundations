let cleanUp = phrase => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = [];
  let workingArray = phrase.split('');

  workingArray.forEach(char => {
    if (alphabet.includes(char.toLowerCase())) {
      result.push(char);
    } else if (result[result.length - 1] !== ' ') {
      result.push(" ");
    }
  })
  return result.join("");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "