import express from "express";
import {
    brainTreePaymentController,
    braintreeTokenController,
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSgnIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { getOrdersController } from "../controllers/authController.js";

const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSgnIn,
    isAdmin,
    formidable(),
    createProductController
);
//routes
router.put(
    "/update-product/:pid",
    requireSgnIn,
    isAdmin,
    formidable(),
    updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product

router.get("/search/:keyword", searchProductController)

//similar products
router.get('/related-product/:pid/:cid', relatedProductController)

//category wise prod.
router.get('/product-category/:slug', productCategoryController)



router.get('/braintree/token', braintreeTokenController)

//payments

router.post('/braintree/payment', requireSgnIn, brainTreePaymentController)


//orders

router.get("/orders", requireSgnIn, getOrdersController)

export default router;