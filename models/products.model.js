const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const productSchema = mongoose.Schema({
    type: {
        type: String,
    },
    price: {
        type: Number,
    }
})
const productmodel = mongoose.model('products', productSchema);
module.exports = productmodel;