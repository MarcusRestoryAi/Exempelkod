const fs = require("fs");

const folder = "./NyMapp/";

//Kollar om folder finns
if ( !fs.existsSync(folder) ) {
    //Skapa mapp
    fs.mkdir(folder, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Mapp har blivit skapad");
    });
} else {
    //Radera mapp
    fs.rmdir(folder, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Mapp har blivit raderad");
    });
}