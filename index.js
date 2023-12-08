const items = [
    { id: 1, name: "foo", price: 7},
    { id: 2, name: "bar", price: 9},
    { id: 3, name: "bazz", price: 10},
    { id: 4, name: "quq", price: 12},
];

const search = prompt("Enter the string", "we ll check if there is the this string");
// თუ items აქვს name იგივე ინდექსით (იგივე ასოების თანმიმდევრობა) რაც seatch ს       და ის არ მოიპოვება ამ ერეიში (-1ანუ არ არის.)
let found = items.filter(itm => itm.name.indexOf(search) !== -1); //ანუ რასაც ჩაწერ, ის თუ არის ამოპრინტეო;
console.log(found);





