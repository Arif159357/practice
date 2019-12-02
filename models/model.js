const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,

     required: "Input Title Please"
  },
    salary: {
        type: String,
     required: "Input contents please"
  }
})

const Employee = mongoose.model("Employees",employeeSchema)

module.exports = Employee