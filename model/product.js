const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type : String,
        minLength: 5,
        maxLength : 15,
        required: true,
        enum: ['Laptop', 'Television', 'Mobile']
    },
    quantity: {
        type : Number,
        required: true
    },
    price: {
        type : Number,
        required: true
    },
    description: {
        type : String,
        maxLength: 255,
        required: true
    },
    userQuantity: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema, 'product');
module.exports = Product;