const items = [
    { id: 1, name: "foo", price: 7},
    { id: 2, name: "bar", price: 9},
    { id: 3, name: "bazz", price: 10},
    { id: 4, name: "quq", price: 12},
];
// შეიყვანე, რომელი key გინდა: id, name, price
const keyFormating = prompt("choose Key, ID, Name or price", "Enter ");

//map შექმნის ახალ ერეის და ამოაგდებს, key - ის შესაბამის valueებს. 
const mappedValues = items.map(itm => itm[keyFormating]);
console.log(mappedValues);