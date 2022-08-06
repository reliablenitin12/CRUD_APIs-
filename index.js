const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const port=8000;
const db=require('./config/mongoose');
const passport=require('passport');
const passportJWT=require('./config/passport-jwt-strategy');
const bodyParser=require('body-parser');



//body parser
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

//telling app to use cookie parser
app.use(cookieParser());

//telling app to use our view engine ejs
app.set('view engine','ejs');
app.set('views','./views');

//use express router
app.use('/',require('./routes/index'));


app.listen(port,function(err){
   if(err)
   {
    console.log("Error in running server",err);
   }
   console.log("Server is running and up on port ",port);
});