import { Router } from "express";
import {addProduct,getAllProducts, getByCatg, getOneProduct, getRandomProducts} from '../controllers/Product_cont.js'
import { addToCart, delCartItem, getCart, uptItemQty } from "../controllers/cart_cont.js";
import { addOrder, getUserOrders } from "../controllers/order_cont.js";
import { isLogin, login, logoutUser, newUser, uptUser, userDetails } from "../controllers/user_cont.js";
import { Auth } from "../middleware/Auth.js";
const route = Router();

// products add
route.post('/addProduct', addProduct)
route.get('/getAllProducts', getAllProducts)
route.get('/getOneProduct/:id', getOneProduct)
route.get('/getByCatg/:catg', getByCatg)
route.get('/getRandomProducts/:num', getRandomProducts)

// cart
route.post('/addToCart', addToCart)
route.get('/getCart', getCart)
route.get('/delCartItem/:productID',delCartItem)
route.get('/uptItemQty',uptItemQty)

// order
route.post('/addOrder',addOrder)
route.get('/getUserOrders',getUserOrders)

// user
route.post('/newUser',newUser)
route.post('/login',login)
route.get('/isLogin',Auth,isLogin)
route.get('/logoutUser',Auth,logoutUser)

route.get('/userDetails',userDetails)
route.post('/uptUser',uptUser)

export default route