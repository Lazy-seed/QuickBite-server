import mongoose from "mongoose";


const order = mongoose.Schema({
    userID: {
        type: String
    },
    status: {
        type: String,
        default: "preparing"
    },
    Products: [
        {
            ID: { type: String },
            qty: { type: Number },
            price: { type: Number }
        }],
    totalAmt: {
        type: Number
    },
    payAmt: {
        type: Number
    },
    couponCode: {
        type: String
    },
    couponAmt: {
        type: {
            type: String

        },
        amt: {
            type: Number

        }
    },
    paymentMode: {
        type: String
    },
    address: {
        house: {
            type: String
        },
        area: {
            type: String
        },
        pincode: {
            type: String
        },
        city: {
            type: String
        }
    },
},




    {
        versionKey: false // You should be aware of the outcome after set to false
    })

const order_model = mongoose.model("orders", order);
export default order_model;



