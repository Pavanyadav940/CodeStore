const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const upload = require("../middlewares/multer");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductByName,
  blacklistProduct,
  removeFromBlacklist,
} = require("../controllers/ProductController");

router.post("/create-product",  verifyToken,  upload.array("images", 4),createProduct);

router.put("/update-product/:id", verifyToken, updateProduct);

router.delete("/delete-product/:id", verifyToken, deleteProduct);

router.get("/get-products", getProducts);

router.get("/get-product-by-name/:name", getProductByName);

router.put("/blacklist-product/:id", verifyToken, blacklistProduct);

router.put("/remove-from-blacklist/:id", verifyToken, removeFromBlacklist);

module.exports = router;
// rzp_test_kZoKPCbW2xBaoF-key
// jaIT1qTE9YbvNCXlnhMwfsWy-secret
