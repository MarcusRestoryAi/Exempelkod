//Hämta exporterad data
const mod = require("./myModule.js");
const User = require("./myClass.js");

//Skriv ut namn
console.log(`Mitt namn är ${mod.exportNamn}`);

//Skriver ut meddelande
console.log(mod.greetings());

//Skriver ut summa av 2 tal
console.log(mod.addition(7, 8));

//Skapa ett obejct av klassen User
const user1 = new User("Cihan", "abc123", "Gillar katter");

//Anropa metod i objektet
console.log(user1.getUserData());

console.log(mod);
console.log(User);