import mongoose from 'mongoose'

const user_schema = mongoose.Schema({
    profileImg:{
        type:Number
    },
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:Number
    },
    coupons:[]
   
})

const user_model = mongoose.model("users", user_schema);
export default user_model;