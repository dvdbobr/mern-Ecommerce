const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    orderItems: {
        type: Object,
    },
    shippingAddress: {
        type: Object,
    },
    paymentMethod: {
        type: String,
    },
    itemsPrice: {
        type: Number,
    },
    taxPrice: {
        type: Number,
    },
    totalPrice: {
        type: Number,
    }

}, { timestamps: true })

const ordermodel = mongoose.model('orders', orderSchema);
module.exports = ordermodel;