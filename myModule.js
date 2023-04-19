//Skapa ett värde
const namn = "Marcus";
//Export data från denna fil
exports.exportNamn = namn;

//Skapa en funktion
const greetings = () => {
    return "Hejsan";
};
exports.greetings = greetings;

//Skapa en funkvtion som returnerar summan av 2 tal
const addition = (tal1, tal2) => {
    return tal1 + tal2;
}
exports.addition = addition;