import Product_model from "../models/Product_model.js";




// get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product_model.find();
        res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}

// get one product
export const getOneProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product_model.findById(id)
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}

// get by catg
export const getByCatg = async (req, res) => {
    const catg = req.params.catg
    try {
        const catgPtoducts = await Product_model.find({ catg: catg });
        if (catgPtoducts.length != 0) {
            res.status(200).json({
                success: true,
                catgPtoducts
            })
        } else {
            res.status(200).json({
                success: false,
                msg: "no products"
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



// admin ----------------------------------------------------------------------------------

// add product
export const addProduct = async (req, res) => {
    const data = req.body
    try {
        const product = await Product_model.create(data);
        res.status(200).json({
            success: true,
            msg: "food added",
            product
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}



// get randoms
export const getRandomProducts = async (req, res) => {
    const num = Number(req.params.num)
    try {
        const products = await Product_model.aggregate(
            [{ $sample: { size: num } }]
        );
        res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "failed",
            error
        })
    }
}