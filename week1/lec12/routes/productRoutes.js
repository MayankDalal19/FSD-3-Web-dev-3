
const express=require("express");

const router=express.Router();
const productController=require("../Controller/productController.js")


router.get("/",productController.getProduct)

router.get("/:id",productController.getProductByID)


router.post("/",productController.postProduct)


router.put("/:id",productController.updateProduct)



router.delete("/:id",productController.deleteProduct)

module.exports=router