const { Router } = require('express');

// const ProductManager = require('../dao/fs/products.fs');
const Products = require('../services/products.service');

const FilesDao = require('../dao/fs/files.fs');
const FilesManager = new FilesDao('products.json');

const router = Router();

router.get('/', async (req, res) => {
	// const products = await manejadorDeProductos.getProducts();
	const products = await Products.find();
	res.json({ message: products });
});

router.post('/loadintodb', async (req, res) => {
	const products = await FilesManager.loadItems();
	const response = await Products.insertMany(products);
	res.json({ message: response });
});

module.exports = router;
