//Write a function that counts the number of occurrences of each element in a given array. 
//Once counted, log each element alongside the number of occurrences.
//Consider the words case sensitive e.g. ("suv" !== "SUV").

/*
problem: count the occurance of each element in an array of strings and log how many times the elements appears
example: see below
  -array will contain strings and is saved to a variable
  -no empty array positions
  -elements are case sensative
  -elements must also be chracter sensative
data structure:
  input: array
  output: object
algorithm:
  -create an object with the elements of an array as the keys
  -iterate through the array and count the keys, store the count as the value
code:
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


let countOccurrences = (array) => {
  let vehicleTypes = {};
  
  for (let i = 0; i < array.length; i++) {
    vehicleTypes[array[i]] = vehicleTypes[array[i]] || 0;
    vehicleTypes[array[i]] += 1;
  };

  for (let item in vehicleTypes) {
    console.log(`${item} => ${String(vehicleTypes[item])}`);
  }
  
};

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2