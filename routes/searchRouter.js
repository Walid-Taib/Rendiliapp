const express =require('express');
const bodyParser=require('body-parser');
const search=express.Router();

search.use(bodyParser.json())

const Company=require('../models/company')
search.route('/')
.post((req,res,next)=>{
  Company.aggregate([{$match:{
    $or:[
        {city:req.body.city},
        
    ],
    $and:[{
      name:req.body.name
    }]
    
}}])
  .then((company)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(company)
  },(err)=>next(err))
  .catch((err)=>next(err))
})
module.exports=search;