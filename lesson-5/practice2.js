//For each of these collection objects, demonstrate how you would change the value 3 to 4.
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
//console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
//console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
//console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
//console.log(obj2);

//Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let memberDetails = Object.values(munsters);
let maleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    maleAge += member.age;
  }
})
//console.log(maleAge); 

//Given this previously seen family object, print the name, age, and gender of each family member:
//Each output line should follow this pattern:
//(Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach(entry => {
  let names = entry[0];
  let age = entry[1].age;
  let gender = entry[1].gender;

  console.log(`${names} is a ${age}-year-old ${gender}.`);
})
