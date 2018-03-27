var express = require('express');
var app = express();

app.post("/", function (req, res) {
    res.send("Hello ! , Welcome to weatherBot");
})

app.listen(process.env.PORT||3000 , function(){
    console.log("Started WeatherBot server at port 3000");
});