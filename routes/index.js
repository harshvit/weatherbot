var express = require('express');
var app = express();

app.post("/", function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify({
        "response" : "Started WeatherBot server at port 3000" ,
        "error" : null
    }));
})

app.listen(process.env.PORT||3000 , function(){
    console.log("Started server !");
});