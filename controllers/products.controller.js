const Product = require("../models/product.model");



const createProduct = async (req,res, next) => {
    try {

        const product = await Product.create(req.body);

        res.status(201).json(product)

    } catch (error) {
        res.status(400).json({error: error.message})
        
    };
};

const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({products});
        
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }
};

const getSingleProduct = async (req,res) => {
    try {

        const productId = req.params.productId;
        const product = await Product.findById();

        if(!product) return res.status(404).json({msg: "Product Not Found"});

        res.status(200).json(product);


        
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }
};
const updateProduct = async (req,res) => {
    try {

        const productId = req.params.productId;
        let product = await Product.findById(productId)

        if(!product) return res.status(404).json({msg: "Product Not Found"});

        product = await Product.findByIdAndUpadate(productId, req.body, {new: true})
        res.status(200).json(product);
        
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }
};
const deleteProduct = async (req,res) => {
    try {

        const productId = req.params.productId;
        const product = await Product.findById(productId)

        if(!product) return res.status(404).json({msg: "Product Not Found"});

        await Product.findByIdAndDelete(productId);

        res.status(200).json({msg:"Product deleted successfully"});


        
    } catch (error) {
        res.status(400).json({error:error.message});
        
    };
};



module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    deleteProduct,
    updateProduct
}