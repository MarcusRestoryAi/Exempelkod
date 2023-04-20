//Hämta paket
const express = require("express");
const bodyParser = require("body-parser")
const app = new express();
const portNr = 8081;

const fs = require("fs");
const jsonFilePath = "./data.json";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set up listener för app
app.listen(portNr, () => {
    console.log("Server ligger nu på 8081 och lyssnar");
});

//Skapa en Get metod som returnerar index.html
app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
})

//Skapa en Get metod som returnerar login.html
app.get("/login", (req, res) => {
    res.sendFile("login.html", {root: __dirname});
})

//Skapa en Redirect från /About till index
app.get("/about", (req, res) => {
    res.redirect("/");
})

//Skapa en POST metod som returnerar body-data som en JSON string
app.post("/", (req, res) => {
    let data = req.body;

    //Konvertera age till number
    data.age = parseInt( data.age );

    let jsonData = JSON.stringify(data, null, 2);
    console.log(jsonData);

    //Skriva JSON string till fil
    fs.writeFile(jsonFilePath, jsonData, (err) => {
        //Om error, skriv ut error
        if (err) console.log(err);
    });

    res.send('Data Recieved: ' + jsonData);
})