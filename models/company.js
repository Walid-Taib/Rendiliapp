const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const CompanySchema =new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    }
    ,city:{
        type:String,
        required:true
    }
},{timestamps:true})
const Company=mongoose.model('Company',CompanySchema);
module.exports=Company;