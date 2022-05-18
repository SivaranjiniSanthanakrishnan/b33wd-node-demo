const express = require('express');
const router = express.Router();
const productModule = require('../modules/product');

router.get('/get', productModule.getProduct);

router.post('/create', productModule.createProduct)

router.put('/update/:productId', productModule.updateProduct)

router.delete('/delete/:productId', productModule.deleteProduct);

module.exports = router;