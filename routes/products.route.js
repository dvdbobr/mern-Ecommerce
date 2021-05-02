const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth')
const productController = require('../controllers/products.controller');

router.get('/', (req, res) => {
    productController.getProducts(req, res);
})


module.exports = router;