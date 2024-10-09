const router = require ("express").Router();
const {addProduct,updateProduct,deleteProduct,getOrders} = require ("../controllers/adminController")
const {adminMiddleware} = require ('../middleware/adminMiddleware')

// router.post("/register",[check('email',"email is no t valid").isEmail, 
//    check('password',"your password is not valide").isStrongPassword({
//     minLength:6,minLowercase:1,minNumbers:1,minUppercase:1,minSymbols:1
//    }) ] ,register)


router.post("/addproduct",adminMiddleware, addProduct)
router.put("/updateproduct/:id",adminMiddleware, updateProduct)
router.delete("/deleteproduct/:id",adminMiddleware, deleteProduct)
router.get("/getorders/:id",adminMiddleware, getOrders)

module.exports=router