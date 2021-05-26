let munstersDescription = "The Munsters are creepy and spooky.";

/*
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
*/

let changeString = (string) => {
  string.split("").map(function(char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join("");
  return string;
}

console.log(changeString(munstersDescription));