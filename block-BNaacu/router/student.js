const express = require("express");
const Student = require("../models/student");
const router = express.Router();



router.get("/", function(req, res){
    // res.render("index");
    res.render("index", { lists: ["ankit", "suraj", "prashant", "ravi"] });
})

router.get("/new", function(req, res){
    res.render("newStudent");
})

router.post("/", function(req, res){
    console.log(req.body)

    if(req.body.name === "" || req.body.mobileNumber === "" || req.body.course === "" || req.body.fathersName === ""){
        console.log("Form data cannot be empty")
        res.json({error: "Form data cannot be empty"});
        return;
    }
    Student.create(req.body, function(err, data){
        if(err){
            console.log(err)
            res.status(500).json({"status": "Error"});
            return;
        }
        if(data._id){
            console.log("OK")
            res.status(200).json({"status":"OK"});
        }
    })
})

// router.get("/", function(req, res){
//     console.log("dejdbej")
// })

module.exports = router;