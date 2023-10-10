import { Router } from "express";
import {addProduct,getAllProducts, getOneProduct} from '../controllers/Product_cont.js'
import { addToCart, getCart } from "../controllers/cart_cont.js";
import { addOrder, getUserOrders } from "../controllers/order_cont.js";
const route = Router();

// products add
route.post('/addProduct', addProduct)
route.get('/getAllProducts', getAllProducts)
route.get('/getOneProduct/:id', getOneProduct)

// cart
route.post('/addToCart', addToCart)
route.get('/getCart', getCart)

// order
route.post('/addOrder',addOrder)
route.get('/getUserOrders',getUserOrders)

export default route