const router = require("express").Router();
const passport = require("passport");

// // auth logout
// router.route("/logout").get((req, res) => {
//   // handle with passport
//   let redirectPath =
//     process.env.NODE_ENV === "production"
//       ? "https://esl-final-project.herokuapp.com/"
//       : "http://localhost:3000/";
//   req.logout();
//   res.redirect(redirectPath);
// });

// auth with google
router.route("/google").get(
  passport.authenticate("google", {
    scope: ["openid", "email", "profile"],
  })
);

// auth with facebook
router.route("/facebook").get(
  passport.authenticate("facebook", {
    scope: ["email"],
  })
);

// callback route for google to redirect to
router
  .route("/google/redirect")
  .get(passport.authenticate("google"), (req, res) => {
    let redirectPath =
      process.env.NODE_ENV === "production"
        ? "https://esl-final-project.herokuapp.com/home"
        : "http://localhost:3000/home";
    redirectPath = `${redirectPath}/search?userId=${req.user._id}`;
    res.redirect(redirectPath);
  });

// callback route for facebook to redirect to
router
  .route("/facebook/redirect")
  .get(passport.authenticate("facebook"), (req, res) => {
    let redirectPath =
      process.env.NODE_ENV === "production"
        ? "https://esl-final-project.herokuapp.com/home"
        : "http://localhost:3000/home";
    redirectPath = `${redirectPath}/search?userId=${req.user._id}`;
    res.redirect(redirectPath);
  });

module.exports = router;