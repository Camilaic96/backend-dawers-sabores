const { ProductDao, CartDao } = require('../dao/factory');
const ProductRepository = require('./Product.repository');
const CartRepository = require('./Cart.repository');

const productsRepository = new ProductRepository(ProductDao);
const cartsRepository = new CartRepository(CartDao);

module.exports = { productsRepository, cartsRepository };
