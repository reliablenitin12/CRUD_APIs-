const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;

const User=require('../models/user');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'secrect'
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
//find the user and establish the identy
User.findById(jwtPayLoad._id, function(err, user) {
    if (err) {
        return console.log("Error in finding user in jwt");
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
});
}));

module.exports=passport;