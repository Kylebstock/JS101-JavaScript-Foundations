let names = ['John', 'Smith'];

let profession = {
   title : 'master',
   occupation : 'plumber',
 };

let greeting = (array, object) => {
  console.log(`Hello ${array.join(' ')}, it's nice to have a ${object.title} ${object.occupation} here with us!`);
}

greeting(names, profession);