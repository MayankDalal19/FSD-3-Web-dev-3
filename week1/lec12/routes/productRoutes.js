
const express=require("express");

const router=express.Router();
const productController=require("../Controller/productController.js")


router.get("/",productController.getProduct)

router.get("/",productController.getProductByID)


router.post("/",productController.postProduct)


router.put("/",productController.updateProduct)



router.delete("/",productController.deleteProduct)

module.exports=router