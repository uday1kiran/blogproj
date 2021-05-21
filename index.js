const express = require('express');
const ejs=require('ejs');
const bodyParser = require('body-parser');

const path = require('path');
const app = new express();
app.set('view engine','ejs')

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/posts/new',(req,res)=>{
    res.render('create')
})

app.post('/posts/store',(req,res)=>{
    console.log(req.body);
    res.redirect('/')
})

app.listen(4000,()=>{
    console.log('App listening on port: 4000');
})