const express = require('express');
const bodyParse = require("body-parser");
// const tools = require("../public/javascripts/getPropertyTools");
const fs = require('fs');
var router = express.Router();
const app = express();
app.use(bodyParse.json());


app.post("/", function (req, res) {
        res.send(JSON.stringify("{error: null}"));
    }
});

app.listen(process.env.PORT||3000 , function(){
    console.log("Started server !");
});
