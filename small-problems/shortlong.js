
let shortLongShort = (string1, string2) => {
  if (string1.length < string2.length) {
    console.log(`${string1}${string2}${string1}`);
  } else {
    console.log(`${string2}${string1}${string2}`);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"