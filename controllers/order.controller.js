const ordersModel = require('../models/order.model');

const makeOrder = async (req, res) => {
    try {
        const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, totalPrice } = req.body
        // if (!images) return res.status(400).json({ message: 'no images given' })
        if (orderItems && orderItems.length === 0) {
            return res.status(400).send({ message: 'No items orders' })
        }
        else {
            const order = new ordersModel({
                user: req.user._id,
                orderItems: orderItems,
                shippingAddress: shippingAddress,
                paymentMethod: paymentMethod,
                itemsPrice: itemsPrice,
                taxPrice: taxPrice,
                totalPrice: totalPrice,
            })
            await order.save()
            return res.send(order)
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
module.exports = {
    makeOrder,
}