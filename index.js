const items = [
    { id: 1, name: "foo", price: 7},
    { id: 2, name: "bar", price: 9},
    { id: 3, name: "bazz", price: 10},
    { id: 4, name: "quq", price: 12},
];

const welcome = prompt("Enter an item name", "Enter string here");

//ერეი itemზე ვიყენებთ array method -finds
//რომელშიც არგუმენტად ვუშვებთ callback მეთოდს - ანუ მთლიანად ეგ ექსფრეშენი არის ქალლბაცკ ფუნქციას
const found = items.find(elementebi => elementebi.name === welcome);
//ეს callback მეთოდი იღებს ერთ არგუმენტს (ELEMENTEBI) და აბრუნებს ბულიონს 
// ქოლბექის აზრი აქ იმაშია, რომ for loop ის ნაცვლად, ის დააბრუნებს ინფორმაციას, როცა სახელი და შეყვანილი ინფო დაემთხვევა

// ასე მეორენაირად const found = items.find((elementebi) => {return elementebi.name === welcome});
/* ასეა ვრცლად
const found = items.find(function(elementebi) {
    return elementebi.name === welcome;
  }); */
  
if (found){
    console.log("found");
    console.log(found);  //ეს იმისთვის, რომ თვითონ id და სხვა მონაცემი ამოპრინტოს
} else {console.log(`not found ${welcome}`)};


