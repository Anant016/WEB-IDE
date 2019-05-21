const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const request = require('request');


const app=express();


app.set('view engine','ejs');
app.use(cors());
const users=require('./routes/users')


app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users',users);



app.get('/', function(req,res){
   res.render('a');
});


port=process.env.PORT || 8080;
app.listen(port,function(){
    console.log('Port started at :8080');
});