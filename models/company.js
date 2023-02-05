const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const CompanySchema =new Schema({
    name:{
        type:String,
    }
    ,city:{
        type:String,
    },
    typeOfJob:{
        type:String,
    },
    minPrice:{
        type:String,
    },
    maxPrice:{
        type:String
    },
    description:{
        type:String,
    },
    skills:{
        type:String,
    },
    job:{
        type:String
    },
    position:{
        type:String,
    }

},{timestamps:true})
const Company=mongoose.model('Company',CompanySchema);
module.exports=Company;