const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const UserSchema=new Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    age:{
        type: String,
        required:true,
    },
    gender:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    confirmPassword:{
        type: String,
        required:true,
    }
});
module.exports=mongoose.model('User',UserSchema);