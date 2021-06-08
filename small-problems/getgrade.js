//Write a function that determines the mean (average) of the three scores passed to it, 
//and returns the letter associated with that grade.
//Input: 3 arguments
//output: averaged score with letter
//function takes in three arguments
  //scores range from 0 - 100
  //validates for negative numbers or numbers over 100
    //If statement with number < 0 and > 100
  //great empty variable to store the results
  //add the three together and divide by three, save to empty variable
  //creat a switch statement to evaluate the letter grade from the variable
  //return the score and the letter grade

let getGrade = (score1, score2, score3) => {
  let averageScore;
  while ((score1 > 0 && score1 < 100) && (score2 > 0 && score2 < 100) && (score3 > 0 && score3 < 100)) {
    averageScore = (score1 + score2 + score3) / 3;
    if (averageScore > 89 && averageScore < 101) {
      return 'A';
    } else if (averageScore > 79 && averageScore < 90) {
      return 'B';
    } else if (averageScore > 69 && averageScore < 80) {
      return 'C';
    } else if (averageScore > 59 && averageScore < 70) {
      return 'D';
    } else {
      return 'F';
    }
  } return `Invalid test scores`;
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(-1, 90, 93));    // invalid
console.log(getGrade(101, 90, 93));    // invalid
