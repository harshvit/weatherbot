var express = require('express');
var bodyParse = require("body-parser");
var fireBase = require("firebase");
var router = express.Router();
var app = express();
app.use(bodyParse.json());

var temp = 32;
var type = "Sunny";

app.post("/", function (req, res) {

    var responseTxt = "";
    if(req.body.result.parameters['geo-city']) {

        var city = req.body.result.parameters['geo-city'];
        responseTxt = "Welcome to WeatherBot! Weather in " + city + " is " + type +
            ". (Temperature: " + temp + ")";
    }
    else {
        responseTxt = "Weather of which city dude ?";
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "speech" : responseTxt ,
        "displayText" : responseTxt ,
        "error" : null
    }));
});

app.post("/firebase", function (req, res) {

    var config = {
        apiKey: "AIzaSyCpDouoQQhw85V7uND3Fu4vpHXP4hkRsCs",
        authDomain: "my-weather-ca03d.firebaseapp.com",
        databaseURL: "https://my-weather-ca03d.firebaseio.com",
        projectId: "my-weather-ca03d",
        storageBucket: "my-weather-ca03d.appspot.com",
        messagingSenderId: "211237132579"
    };
    fireBase.initializeApp(config);
    var database = fireBase.database();

});

app.listen(process.env.PORT||3000 , function(){
    console.log("Started server !");
});