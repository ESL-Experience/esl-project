const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook");
const keys = require('./keys');
const { User } = require('../models')

passport.serializeUser((user, done)=> {
   done(null, user.id);
});

passport.deserializeUser((id, done)=> {
   User.findById(id).then((user) => {
      done(null, user);
   });
});


const googleRedirect = process.env.NODE_ENV === "production" ? ('https://esl-final-project.herokuapp.com/auth/google/redirect') : ("http://localhost:3001/auth/google/redirect")
const facebookRedirect = process.env.NODE_ENV === "production" ? ('https://esl-final-project.herokuapp.com/auth/facebook/redirect') : ("http://localhost:3001/auth/facebook/redirect")


passport.use(
   new GoogleStrategy({
    // options for the google stratagy
    callbackURL:googleRedirect,
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
 }, (accessToken, refreshToken, profile, done) => {
   console.log(profile)
    // check if user already exists in db

    User.findOne({googleid: profile.id}).then((currentUser) => {
       
      if(currentUser){
         // User already exists
         console.log("user is: ", currentUser)
         done(null, currentUser);
      }else {
         // if not, create user in our database
         new User({
            displayName: profile.displayName,
            googleid: profile.id,
            thumbnail: profile._json.picture,
            email: profile.emails[0].value
         }).save().then((newUser) => {
            console.log('new user created:' + newUser);
            done(null, newUser);
         })
      }
    });

 })
)

passport.use(
    new FacebookStrategy({
     // options for the facebook stratagy
     callbackURL:facebookRedirect,
     clientID:keys.facebook.clientID,
     clientSecret:keys.facebook.clientSecret,
     profileFields:['id','emails','displayName','photos']
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile)
     // check if user already exists in db
 
     User.findOne({facebookid: profile.id}).then((currentUser) => {
        
       if(currentUser){
          // User already exists
          console.log("user is: ", currentUser)
          done(null, currentUser);
       }else {
          // if not, create user in our database
          new User({
             displayName: profile.displayName,
             facebookid: profile.id,
             thumbnail: profile.photos[0].value,
             email: profile.emails[0].value
          }).save().then((newUser) => {
             console.log('new user created:' + newUser);
             done(null, newUser);
          })
       }
     });
 
  })
 )