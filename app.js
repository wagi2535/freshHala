const express = require("express");
const app = express(); 
const mongoose = require("mongoose")
const Hala = require('./models/fresh')
const seeDB = require("./seedb");

seeDB();
app.set('view engine', 'ejs')
app.use(express.static(__dirname+ '/public'))
mongoose.connect(process.env.DATABASEURL);





app.get('/', function(req,res){
    res.redirect('/fresh')
})

app.get('/fresh', function(req,res){
    res.render('index')
})

app.get('/menu', function(req,res){
    Hala.find({}, function(error, fresh){
        if(error){
            console.log(error)
        }else{
            res.render('menu', {fresh:fresh})
        }
    })
})

app.get('/contact', function(req,res){
    res.render('contact')
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server statrted")
})