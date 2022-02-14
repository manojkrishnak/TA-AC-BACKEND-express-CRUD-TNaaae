const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name: String,
    class: Number,
    course: String,
    age: Number,
    fathersName: String,
    mobileNumber: Number
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;