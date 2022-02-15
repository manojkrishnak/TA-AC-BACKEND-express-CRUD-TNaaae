const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.get("/", function(req, res){
    res.send("Welcome")
})

router.get("/new", function(req, res){
    res.render("userForm");
})

router.post("/", function(req, res){
    console.log(req.body)

    User.create(req.body, function(req, res){
        // res.status(200).json({status: "OK"})
        return res.redirect("/users/new/")
    })
})

module.exports = router;