import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
import { ensureAuthenticated } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ]);
});

//router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
