const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Todo_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to mongodb"));

db.once('open',function(){
    console.log("Connected to Databse:: MongoDB");
});

module.exports=db;