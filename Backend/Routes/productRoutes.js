const express = require('express');
const Storage = require('../middleware/upload');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.post('/create', Storage, ProductController.create);
router.get('/getAllProduct', ProductController.findAll);

module.exports = router;