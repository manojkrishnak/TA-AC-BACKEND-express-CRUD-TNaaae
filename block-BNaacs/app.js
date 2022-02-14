const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res){
    res.render("index", {name: "Ejs"});
})


app.listen(4444, () => console.log("running on 4444"))
