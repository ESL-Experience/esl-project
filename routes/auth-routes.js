const router = require("express");
const passport = require("passport");
const app = router();

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
// router.route("/google").get(
//   passport.authenticate("google", {
//     scope: ["openid", "email", "profile"],
//   })
// );

// auth with facebook
// router.route("/facebook").get(
//   passport.authenticate("facebook", {
//     scope: ["email"],
//   })
// );

// callback route for google to redirect to
// router
//   .route("/google/redirect")
//   .get(passport.authenticate("google"), (req, res) => {
//     let redirectPath = "/dashboard";
//     res.redirect(redirectPath);
//   });

// callback route for facebook to redirect to
// router
//   .route("/facebook/redirect")
//   .get(passport.authenticate("facebook"), (req, res) => {
//     let redirectPath = "/dashboard";
//     res.redirect(redirectPath);
//   });

// router.route("/current_user", (req, res) => {
//   res.send(req.user);
// });

// module.exports = router;


module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/dashboard");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/home");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
