const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth')
const productController = require('../controllers/products.controller');

router.get('/', (req, res) => {
    productController.getProducts(req, res);
}).post('/', (req, res) => {
    productController.createProduct(req, res);
}).delete('/:id', (req, res) => {
    productController.deleteProduct(req, res);
}).put('/:id', (req, res) => {
    productController.updateProduct(req, res);
})


module.exports = router;