import mongoose from 'mongoose'
/*
name
userId
password
email
usertype
*/
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxLength : 25,
    },
    userId : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 15,
        unique : true
    },
    userType :{
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }
},{versionKey : false, timestamps : true})

const User = mongoose.model("User", userSchema);

export default User;