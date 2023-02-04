const mongoose=require('mongoose');
const Schema =mongoose.Schema;
var passportLocalMongoose=require('passport-local-mongoose');



const User=new Schema({
    admin:{
        type:Boolean,
        default:true
    }
})
User.plugin(passportLocalMongoose);
const users=mongoose.model('User',User);
module.exports=users;