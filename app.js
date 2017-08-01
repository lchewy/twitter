const express = require('express');
const app = express();
const volley = require('volleyball')

app.listen(3000, function(){
    console.log("server listening")
})

app.use(volley)

app.get('/news', function(req, res, next){
    res.send('NEWS!!!!');
    console.log(req.method, req.url, "");
    next();
})

app.get("/", function(req, res, next){
    res.send("Welcome!")
    next();
})

app.get("/is-anybody-in-there", function(req, res, next){
    res.send("blah")
    console.log(req.method, req.url,"")
    next();
})

app.get("/modernism", function(req, res, next){
    // console.log(req.method, req.url, "")
    res.send('<h1>MODERNISM</h1>')
    
    // next();
})

app.post("/modernism", function(req, res, next){
    // console.log(req.method, req.url, "")
    console.log(req.method, req.url, "")
    
    // next();
})