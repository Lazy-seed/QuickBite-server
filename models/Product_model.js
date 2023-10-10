import mongoose from "mongoose";


const product = mongoose.Schema({
    name: {
        type: String
    },
    imgUrl: {
        type: String
    },
    price:{
        type:Number
    },
    desc: {
        type: String
    },
    isVeg: {
        type: Number,
        default: 0
    },
    foodType: {
        type: String,
        default: ""
    },
    catg: {
        type: String,
        default: ""
    },
    available: {
        type: Number,
        default: 1
    },
    ingridents: {
        type: String,
        default: ""
    },
    popular: {
        type: Number,
        default: 0
    },
    viewed: {
        type: Number,
        default: 0
    }

},
{
    versionKey: false // You should be aware of the outcome after set to false
})

const Product_model = mongoose.model("Products", product);
export default Product_model;



