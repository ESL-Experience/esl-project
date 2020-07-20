const router = require("express");
const authRoutes = require("../auth-routes");
const app = express();

//set up routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;