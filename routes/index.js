var express = require('express');
var app = express();

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
})

app.listen(process.env.PORT||3000 , function(){
    console.log("Started server !");
});