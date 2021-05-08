const productsModel = require('../models/products.model');


const getProducts = async (req, res) => {
    try {
        const products = await productsModel.find({})
        return res.send(products);
    }
    catch (err) {
        return res.send(`error:${err}`);
    }
}
const getProductById = async (req, res) => {
    let id = req.params.id;
    try {
        let product = await productsModel.findOne({ "productID": id })
        if(!product) {
            return res.status(400).send('no such product')
        }
        return res.status(200).send(product)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
const createProduct = async (req, res) => {
    try {
        const { productID, title, category, description, price, url } = req.body
        // if (!images) return res.status(400).json({ message: 'no images given' })
        const product = await productsModel.findOne({ productID })
        if (product)
            return res.status(400).json({ message: 'product already exists' })

        const newProduct = new productsModel({
            productID, title, category, description, price, url
        })
        await newProduct.save()
        res.json({ 'new product created': newProduct })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
const deleteProductById = async (req, res) => {
    const id = req.params.id;
    try {//can make this find by productID
        const product = await productModel.findOneAndDelete({ productID: id })
        if (!product)
            return res.send("no such product");
        res.send(product)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
const updateProduct = async (req, res) => {
    try {
        const { productID, title, category, description, price, url } = req.body

        await productsModel.findOneAndUpdate({ productID: req.params.id }, {
            productID, title, category, description, price, url
        })
        res.json({ message: 'product updated successfully' })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProductById,
    updateProduct,
}