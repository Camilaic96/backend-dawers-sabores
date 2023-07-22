/* eslint-disable no-useless-catch */
const Cart = require('../models/Carts.model');

class CartsMongoDAO {
	async find() {
		try {
			const carts = await Cart.find();
			return carts;
		} catch (error) {
			return error;
		}
	}

	async findOne(param) {
		try {
			const cart = await Cart.findOne(param);
			return cart;
		} catch (error) {
			return error;
		}
	}

	async findById(id) {
		try {
			const cart = await Cart.findById(id);
			return cart;
		} catch (error) {
			throw error;
		}
	}

	async create(newCart) {
		try {
			const cart = await Cart.create(newCart);
			return cart;
		} catch (error) {
			return error;
		}
	}

	async updateOne(param, newCart) {
		try {
			const cart = await Cart.updateOne(param, newCart);
			return cart;
		} catch (error) {
			return error;
		}
	}

	async findOneAndUpdate(param, newCart) {
		try {
			const cart = await Cart.findOneAndUpdate(param, newCart, {
				new: true,
			});
			return cart;
		} catch (error) {
			throw error;
		}
	}

	async deleteOne(param) {
		try {
			const cart = await Cart.deleteOne(param);
			return cart;
		} catch (error) {
			return error;
		}
	}

	async insertMany(newCarts) {
		try {
			const carts = await Cart.insertMany(newCarts);
			return carts;
		} catch (error) {
			return error;
		}
	}

	async deleteMany() {
		try {
			await Cart.deleteMany();
			return 'Carts deleted';
		} catch (error) {
			return error;
		}
	}
}
const Carts = new CartsMongoDAO();
module.exports = Carts;
