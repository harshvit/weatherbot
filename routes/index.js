var express = require('express');
var app = express();

var temp = 32;
var type = "Sunny";

app.post("/", function (req, res) {

    responseTxt = "Welcome to WeatherBot! Weather in " + req.body.result.parameters['geo-city'] + " is " + type +
                    ". (Temperature: " + temp +")";

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