const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
//const paginatedResult = require('../middleware/paginatedResult')
const orderController = require('../controllers/order.controller');

router.post('/',auth, (req, res) => {
    orderController.makeOrder(req, res)
})


module.exports = router;