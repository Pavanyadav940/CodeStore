const router = require("express").Router();
const { addPincodes, getPincode } = require("../controllers/pinCodeController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/add-pincodes", verifyToken, addPincodes);

router.get("/get-pincode/:pincode", getPincode);

module.exports = router;
