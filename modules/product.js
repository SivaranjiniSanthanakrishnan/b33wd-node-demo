const productModel = require('../model/product');

module.exports.createProduct = async (req,res,next) => {
    const productData = new productModel({...req.body.product});
    try {
        const createdResponse = await productData.save();
        res.send(createdResponse)
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getProduct = async (req,res,next) => {
    try {
        const products = await productModel.find();
        res.send(products)
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateProduct = async (req,res,next) => {
    try{
        const updatedResponse = await productModel.findOneAndUpdate(
                                                    {_id: req.params.productId}, 
                                                    {...req.body.product},
                                                    {new: true, runValidators: true})
        res.send(updatedResponse);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.deleteProduct = async (req,res,next) => {
    try{
        const deletedResponse = await productModel.findByIdAndRemove(req.params.productId)
        res.send(deletedResponse)
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}