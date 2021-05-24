let advice = "Few things in life are as Important as house training your pet dinosaur, which is important.";

// Expected return value:
// => 'Few things in life are as important as '
//let findIndex = advice.indexOf('house');
//let newAdvice = advice.slice(0, findIndex);
advice = advice.replace(/important/gi, 'urgent');
console.log(advice);