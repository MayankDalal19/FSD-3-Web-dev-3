
const express=require("express");

const router=express.Router();
const productController=require("../Controller/productController.js")

//read
router.get("/search",productController.searchProducts)

router.get("/",productController.getProduct)

router.get("/:id",productController.getProductByID)

//create
router.post("/",productController.postProduct)

//update
router.put("/:id",productController.updateProduct)


//delete
router.delete("/:id",productController.deleteProduct)

module.exports=router