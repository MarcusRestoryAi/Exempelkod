//Import av FS paket
//FS paketet är inbyggt i Node
const fs = require('fs');

//Sökväg till filen
const filePath = "./data.text";
const filePath2 = "./data2.text";

//Kollar om filen existerar
if (fs.existsSync(filePath)) {
    //Öppnar upp filen och läser av innehållet i lokal funktion
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) { //Om error, skriv ut det
          console.error(err);
          return;
        }
        console.log(data); //Skriv ut data
      });

      fs.writeFile(filePath2, "Hello World", (err) => {
        if (err) {
          console.log(err);
        }
      });

} else {
    console.log("Filen finns inte!");
}


//Eftersom att fs.readFile inte är asyncronus så komemr programmet inte att stanna vid ReadFile
//Detta gör att denna console.log kommer ut till konsolen först, före innehållet i data.text filen.
console.log("Slutet av js.filen");