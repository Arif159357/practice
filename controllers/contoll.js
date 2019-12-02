// const Employee = require("./../models/model");


const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const Employee = mongoose.model('Employees')

router.get('/', (req,res)=>{
   

    Employee.find({}, function(err,data){
        if(err) throw err;
        res.render("form.ejs",{emp: data})
    })
    
})

router.post('/',(req,res)=>{
    //console.log(req.body)
    var name = req.query.name;
    console.log(name)
    let emp = new Employee(req.body)
    emp.save((e,data)=>{
        if (e) {
            console.log(e);
            return res.status(400).json({ msg: "All fields needed" });
          }
          res.json(data)
        //   return res.status(200).json({ emp: data });
    })
})

router.post('/find_data/:name',(req,res)=>{
    // console.log(req.params.name);
    var name = req.params.name
    Employee.findOne({

        name: {
            $regex: name,
            $options: 'i'
        }

    }, function(err,data){
        if(err) throw err;
        // console.log(data);
        // 
        res.send(data)
        // res.render('form.ejs',{result:data})
    })
})

module.exports = router