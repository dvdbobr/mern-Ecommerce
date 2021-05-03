const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const productSchema = mongoose.Schema({
    productID: {
        type: String,
        unique: true,
    },
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    url: {
        type: String,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    sold: {
        type: Number,
        default: 0
    }
})
const productmodel = mongoose.model('products', productSchema);
module.exports = productmodel;