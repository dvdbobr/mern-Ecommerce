const prodcutsModel = require('../models/products.model');


const getProducts = async (req, res) => {
    try {
        const products = await prodcutsModel.find({})
        return res.send(products);
    }
    catch (err) {
        return res.send(`error:${err}`);
    }
}

module.exports = {
    getProducts,
}