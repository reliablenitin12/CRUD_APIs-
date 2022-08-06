const User=require('../models/user');

module.exports.profile=function(req,res){
    return res.send('<h1>User Profile</h1>');
}

module.exports.signup=function(req,res){
   return res.render('sign_up',{
      title:"Sign UP"
   });
}
//sign up the user
module.exports.create=function(req,res){
  //if password and confirm password not matches
  if(req.body.password!=req.body.confirm_password){
   return res.redirect('back');
  }
  //check if user is already present or not
   User.findOne({email:req.body.email},function(err,user){
   if(err){
      console.log("Error in finding user in sign-up",err);
      return;
   }
   //if user is not there
   if(!user){
      //creating the user
      User.create(req.body,function(err,user){
         if(err){
            console.log("Error in creating user in sign-up",err);
            return;
         }else{
            console.log("user is created successfully");
            return res.redirect('/user/profile');
         }
      });
   }
   });
  
}
