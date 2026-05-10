const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength:4,
        maxLength:50
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique:true,
        lowercase:true,
        required:true
    },
    password: {
        type: String,
    },
    age: {
        type: Number
    },
    gender: {
        type:String
    },
    skills:{
       type:[String]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema);