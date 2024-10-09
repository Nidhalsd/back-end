const router = require("express").Router();
const {register,login,getProduct,getUSerData,createOrder,getUserOrders} = require("../controllers/userController")
const {authMiddleware}=require("../middleware/authMiddleware")
// const {check} = require("express-validator")

// router.post("/register",
//    [check('email',"email is not valid").isEmail, 
//    check('password',"your password is not valide").isStrongPassword({
//     minLength:6,minLowercase:1,minNumbers:1,minUppercase:1,minSymbols:1
//    }) ] ,register)

router.post("/register", register)
router.post("/login", login)
router.get("/",authMiddleware,  getUSerData)
router.get("/getproducts", getProduct)
router.post("/createorder",authMiddleware, createOrder)
router.post("/getuserorders",authMiddleware, getUserOrders)

module.exports=router