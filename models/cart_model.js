import mongoose from "mongoose";


const cart = mongoose.Schema({
    userID: {
        type: String
    },
    Products: [{ productID: { type: String }, qty: { type: Number } }],
    totalAmt: {
        type: Number
    }
},
    {
        versionKey: false // You should be aware of the outcome after set to false
    })

const cart_model = mongoose.model("Carts", cart);
export default cart_model;



