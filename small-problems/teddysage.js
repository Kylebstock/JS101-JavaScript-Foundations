//Build a program that randomly generates Teddy's age, and logs it to the console. 
//Have the age be a random number between 20 and 120 (inclusive).
//input: none
//output: random number, between 20 - 120


let teddysAge = (min, max) => {
  let age;
  if (min > max) {
    age = Math.floor(Math.random() * (min - max) + max);
  } else {
    age = Math.floor(Math.random() * (max - min) + min)
  }
  console.log(age);
}

teddysAge(120, 20);