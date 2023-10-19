import jwt from "jsonwebtoken"
import user_model from "../models/user_model.js";

export const Auth = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken
        const JWT_KEY = process.env.JWT_KEY;

        const verifyToken = jwt.verify(token, JWT_KEY);

        const rootUser = await user_model.findById(verifyToken._id);

        // console.log(rootUser);
        if (!rootUser) { throw new Error('user not foind') };

        req.token = token
        req.userID = rootUser._id
        req.rootUser = rootUser
        next()

    } catch (error) {
        console.log("user not loggein");
        res.status(200).json({
            success:false,
            msg:"user not loggin"

        })
    }
}