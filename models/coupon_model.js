import mongoose from "mongoose";


const coupon_schema = mongoose.Schema({
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
    min: {
        type: Number
    }
})
