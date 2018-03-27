var express = require('express');
var app = express();

app.post("/", function (req, res) {

    responseTxt = "Welcome to WeatherBot";
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