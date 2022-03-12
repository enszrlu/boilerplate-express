require('dotenv').config()

var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});





console.log("Hello World");



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});


app.use("/public", express.static(__dirname + "/public"));



app.get('/json', (req, res) => {
    var message = { "message": "Hello json" }
    if (process.env.MESSAGE_STYLE == "uppercase") {
        message.message = message.message.toUpperCase()
    }
    res.json(message)
})



app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next();
}, function (req, res) {
    res.json({ time: req.time });
});






module.exports = app;
