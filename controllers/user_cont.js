import user_model from "../models/user_model.js";
import jwt from "jsonwebtoken";


// new user
export const newUser = async (req, res) => {
    const data = req.body
    const { email } = req.body
    try {
        const userExist = await user_model.findOne({ email: email })
        if (userExist) {
            res.status(200).json({
                success: false,
                msg: "user exist",

            })
            return false
        }
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

// login 

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const userExist = await user_model.findOne({ email: email })

        if (!userExist) {
            res.status(200).json({
                success: false,
                msg: "invalid user",

            })
            return
        }

        if (userExist.password !== password) {
            res.status(200).json({
                success: false,
                msg: "invalid password",

            })
            return
        }

        // login success
        const JWT_KEY = process.env.JWT_KEY;
        const token = jwt.sign({ _id: userExist._id }, JWT_KEY)
        const updtToken = await user_model.findByIdAndUpdate({ _id: userExist._id }, { $set: { tokens: token } })
        const uptUser = await updtToken.save();
        res.cookie("jwtoken", token, { expires: new Date(Date.now() + 999999), httpOnly: true, })

        res.status(200).json({
            success: true,
            msg: "user logged in",
            uptUser
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            msg: "failed",
            err: err
        })
    }
}

// logout
export const logoutUser = async (req, res) => {
        const userInfo = req.rootUser;
    
        // logout from all
        const remToken = await user_model.findOneAndUpdate({ _id: userInfo._id }, { $set: { tokens: null } })
    
    
        res.clearCookie('jwtoken', { path: '/' });
        res.status(200).send('user logout');
}


//loggedIn user details
export const isLogin = async (req, res) => {
    const user = req.rootUser

    if (!user) {
        res.status(200).json({
            success: false,
            msg: "not loggedin",
            
        })
    }

    res.status(200).json({
        success: true,
        user
    })
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
        const userDetails = await user_model.updateOne({ _id: '6526cef2ecf19005910d7fb3' }, { $set: newData });
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
