import user_model from "../models/user_model.js";

// new user
export const newUser = async (req, res) => {
    const data = req.body
    try {
        const user = await user_model.create(data);
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}


// user details
export const userDetails = async (req, res) => {
    try {
        const userDetails = await user_model.findById('6526cef2ecf19005910d7fb3');
        res.status(200).json({
            success: true,
            userDetails
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}




// upt user
export const uptUser = async (req, res) => {
    const newData = req.body
    try {
        const userDetails = await user_model.updateOne({_id:'6526cef2ecf19005910d7fb3'},{$set:newData});
        res.status(200).json({
            success: true,
            userDetails
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}
