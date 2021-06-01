let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = list => {
  let produceKeys = Object.keys(list);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter ++) {
    let currentKey = produceKeys[counter];
    let currentValue = list[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }
  return selectedFruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }