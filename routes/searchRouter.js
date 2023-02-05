const express=require('express');
const search=express.Router();
const bodyParser=require('body-parser');
search.use(bodyParser.json());
const Company=require('../models/company');


search.route('/')
.post((req,res,next)=>{
  query={}
  if(req.body.city){
    query.city=req.body.city
  }
  if(req.body.position){
    query.position=req.body.position
  }
  if(req.body.typeOjob){
    query.typeOjob=req.body.typeOjob
  }

  Company.aggregate([{$match:query}])
  .then((resp)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    res.json(resp);
  })
})

module.exports=search;