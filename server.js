const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const passport = require("passport");
const profileRoutes = require("./routes/profile-routes");
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connection to mongoDB
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
  useNewUrlParser: true,
});

// Connect to MongoDB Atlass
mongoose
  .connect(
    "mongodb+srv://userDB:741705My$@cluster0.rnfvi.mongodb.net/userdb?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
// app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`app now listening for requests on ${PORT}`);
});
