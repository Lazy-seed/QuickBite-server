import cart_model from "../models/cart_model.js";

// add to cart
export const addToCart = async (req, res) => {
    const data = req.body
    try {
        const userExist = await cart_model.findOne({ userID: '3' })
        // if user cart exist
        if (userExist) {
            res.status(200).json({
                success: true,
                msg: "usr cart",
                isExist
            })
            return null
        }
        // if user cart not exist
        const cart = await cart_model.create(data);
        res.status(200).json({
            success: true,
            msg: "food added to cart",
            cart
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}

// get cart

export const getCart = async (req, res) => {
    try {
        const cart = await cart_model.findOne({ userID: '1' });
        res.status(200).json({
            success: true,
            cart
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}
