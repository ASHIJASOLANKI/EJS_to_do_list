const express = require("express");
const bodyParser = require("body-parser");



var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

var items = [];
app.get("/",function(req, res){
    res.render("list",{ejes : items})
})


app.post("/",function(req, res){
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");
})


app.listen(2000,function(){
    console.log("Server started");
})