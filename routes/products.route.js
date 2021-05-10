const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth')
//const paginatedResult = require('../middleware/paginatedResult')
const productController = require('../controllers/products.controller');

router.get('/', (req, res) => {
    productController.getProducts(req, res)
}).get('/paginated', (req, res) => {
    productController.getPaginatedProducts(req, res);
}).get('/:id', (req, res) => {
    productController.getProductById(req, res);
}).post('/', (req, res) => {
    productController.createProduct(req, res);
}).delete('/:id', (req, res) => {
    productController.deleteProduct(req, res);
}).put('/:id', (req, res) => {
    productController.updateProduct(req, res);
})


module.exports = router;