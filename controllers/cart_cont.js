import cart_model from "../models/cart_model.js";

// add to cart
export const addToCart = async (req, res) => {
    const data = req.body
    const {  Products } = req.body
    const userID = req.userID
    try {
        const userExist = await cart_model.findOne({ userID: userID })
        // if user-cart exist
        if (userExist) {

            const addedItem = await cart_model.updateMany({ userID: userID }, { $push: { Products: [...Products] } });
            res.status(200).json({
                success: true,
                msg: "food added to cart",
                addedItem
            })
        } else {
            // if user-cart not exist

            const cart = await cart_model.create(data);
            res.status(200).json({
                success: true,
                msg: "new cart created",
                cart
            })
        }

    } catch (err) {
        res.status(200).json({
            success: false,
            msg: "failed",
            err
        })
    }
}


// get cart
export const getCart = async (req, res) => {
    userID = req.userID

    try {
        const cart = await cart_model.findOne({ userID: userID });
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

// del items 
export const delCartItem = async (req, res) => {
    const productID = req.params.productID;
    try {
        const cart = await cart_model.updateMany({ userID: '1' }, { $pull: { Products: { productID: productID } } });
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

// qty update
export const uptItemQty = async (req, res) => {
    const { productID, newQty } = req.body
    try {
        const uptQty = await cart_model.updateOne({ userID: '1', "Products.productID": productID }, { $set: { "Products.$.qty": newQty } });
        res.status(200).json({
            success: true,
            uptQty
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}







// admin ----------------------------------------------------------------------------------


// get all carts
