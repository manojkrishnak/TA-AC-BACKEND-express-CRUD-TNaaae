const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const app = express();
const path = require("path");

mongoose.connect("mongodb://localhost/users", err => {
    console.log("Connected", err ? false: true);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.json());
app.use(express.urlencoded());

app.use("/users", userRoutes);


app.listen(4444, () =>  console.log("4444 it is"));