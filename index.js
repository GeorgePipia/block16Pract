const items = [
    { id: 1, name: "foo", price: 7},
    { id: 2, name: "bar", price: 9},
    { id: 3, name: "bazz", price: 10},
    { id: 4, name: "quq", price: 12},
];


const keyForReducing = prompt('choose a key, either id, or price so we we can use reduce to sum up the values for that key', 'price');

const reduction = items.reduce((acc, item)=> {
  acc = acc + item[keyForReducing];
  return acc;
}, 0); 
console.log(reduction);