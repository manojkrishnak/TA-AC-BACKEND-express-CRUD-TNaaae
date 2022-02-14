const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const studentRoutes = require("./router/student");


mongoose.connect("mongodb://localhost", err => {
    console.log(err ? err : "connected to db");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/students", studentRoutes);

app.use((req, res, next) => {
    res.send("Page not found");
    next();
})


app.listen(4444, () => console.log("running on 4444"))