import order_model from "../models/order_model.js";

// make order
export const addOrder = async (req, res) => {
    const data = req.body
    try {
        const order = await order_model.create(data);
        res.status(200).json({
            success: true,
            msg: "order done",
            order
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}

// get order
export const getUserOrders = async (req, res) => {
    try {
        const orders = await order_model.find({userID:"3"});
        if (orders.length != 0) {
            res.status(200).json({
                success: true,
                msg: "user all orders ",
                orders
            })
        }else{
            res.status(200).json({
                success: false,
                msg: "no orders ",
            })
        }
        
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}