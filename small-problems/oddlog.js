//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/*

let oddLog = () => {
  let num = 1;
  while (num < 100) {
    if ((num % 2) === 1) {
      console.log(num);
    }
    num ++;
  }
}

oddLog();

*/

let oddLog = () => {
  for (let odd = 1; odd < 100; odd += 2) {
    console.log(odd);
  }
}
oddLog();