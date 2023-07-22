const { ProductDao, CartDao, UserDao } = require('../dao/factory');
const ProductRepository = require('./Product.repository');
const CartRepository = require('./Cart.repository');
const UserRepository = require('./User.repository');

const productsRepository = new ProductRepository(ProductDao);
const cartsRepository = new CartRepository(CartDao);
const usersRepository = new UserRepository(UserDao);

module.exports = { productsRepository, cartsRepository, usersRepository };
