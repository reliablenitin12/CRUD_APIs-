const User=require('../models/user');
const jwt=require('jsonwebtoken');
//for creating session
module.exports.createSession= async function(req,res){

    try{
        let user= await User.findOne({email:req.body.email});
        //if user is not found or password incurrect
        if(!user || user.password!=req.body.password){
            return res.json(422,{
              "message":"Invalid user name/password"
            });
        }
        //if user is found
        return res.json(200,{
         "message":"Sign in successfully,here is your token,please keep it safe",
         data:{
            token:jwt.sign(user.toJSON(),'secrect',{expiresIn:'100000'})
         }
        });
    }catch(err){
      return res.json({"message":"Internel server error"});
    }
}