let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];




function isItemAvailable(inventory, transactions) {
  let quantity = transactions.filter(item => item.id === inventory).reduce((sum, transact) => {
    if (transact.movement === 'in') {
      return sum + transact.quantity;
    } else {
      return sum - transact.quantity;
    }
  }, 0);
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

/*
function transactionsFor(item, list) {
  let newList = [];
  for (let index = 0; index < list.length; index++) {
    if (list[index].id === item) {
      newList.push(list[index]);
    }
  }
  return newList;
}

function transactionsFor(itemID, transactions) {
  return transactions.filter(inventory => inventory.id === itemID)
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
*/