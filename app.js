const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const homeRounter = require("./router/home-router");
app.use("/home", homeRounter);
// test
mongoose
  .connect(
    "mongodb+srv://trinhtvfx22649:DxxTUGzQ9ivnJ3Kr@cluster0.ssvrvkk.mongodb.net/codenhombe"
  )
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("connected");
    });
  });
