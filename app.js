const express = require('express');
const app = express();
const volley = require('volleyball');
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js')
const routes = require('./routes');

app.use('/', routes);
app.use(express.static('public'))


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

 const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, function(){
    console.log("server listening")
})

app.use(volley)

app.get('/', function(req, res){
    res.sendFile('stylesheets/style.css')
})































// app.get('/news', function(req, res, next){
//     res.render("index.html")
//     console.log(req.method, req.url, "");
//     // next();
// })

// app.get("/", function(req, res, next){
//     // res.send("Welcome!")
   
//     res.render( 'index', {title: 'Hall of Fame', people: people} );
//     // next();
// })

// app.get("/is-anybody-in-there", function(req, res, next){
//     res.send("blah")
//     console.log(req.method, req.url,"")
//     // next();
// })

// app.get("/modernism", function(req, res, next){
//     // console.log(req.method, req.url, "")
//     res.send('<h1>MODERNISM</h1>')
    
//     // next();
// })

// app.post("/modernism", function(req, res, next){
//     // console.log(req.method, req.url, "")
//     console.log(req.method, req.url, "")
    
//     // next();
// })