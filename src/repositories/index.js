const ProductsDao = require('../dao/factory');
const ProductRepository = require('./Product.repository');

const productRepository = new ProductRepository(ProductsDao);

module.exports = productRepository;
