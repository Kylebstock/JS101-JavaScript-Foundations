let century = year => {
  let result = (Math.ceil(year / 100)).toString();
  let lastNumber = result[result.length - 1];
  let secondLastNumber = result[result.length - 2];

  if (secondLastNumber === 1) {
    return result + 'th';
  } else {
    switch (lastNumber) {
      case '1': return result + 'st';
      case '2': return result + 'nd';
      case '3': return result + 'rd';
      default: return result + 'th';
    }
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"