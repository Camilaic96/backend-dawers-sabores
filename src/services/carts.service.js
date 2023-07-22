/* eslint-disable no-useless-catch */
const { cartsRepository, productsRepository } = require('../repositories');

const find = async () => {
	try {
		const carts = await cartsRepository.find();
		return carts;
	} catch (error) {
		throw error;
	}
};

const findOne = async param => {
	try {
		const cart = await cartsRepository.findOne(param);
		return cart;
	} catch (error) {
		throw error;
	}
};

const findById = async param => {
	try {
		const { cid } = param;
		const cart = await cartsRepository.findById(cid);
		return cart;
	} catch (error) {
		throw error;
	}
};

const create = async () => {
	try {
		const carts = await cartsRepository.create();
		return carts;
	} catch (error) {
		throw error;
	}
};

const createProductInCart = async (params, body) => {
	const { pid, cid } = params;
	const product = await productsRepository.findById(pid);
	const cart = await cartsRepository.findById(cid);
	const { quantity } = body;
	const index = cart.products.findIndex(
		element => element.product._id.toString() === pid,
	);
	if (index !== -1) {
		cart.products[index].quantity += quantity;
	} else {
		const newProduct = {
			product: product._id,
			quantity,
		};
		cart.products.push(newProduct);
	}
	const updateCart = await cartsRepository.findOneAndUpdate({ _id: cid }, cart);
	return updateCart;
};

const updateQuantity = async (params, body) => {
	const { pid, cid } = params;
	const { quantity } = body;
	const cart = await cartsRepository.findById(cid);
	const index = cart.products.findIndex(
		element => element.product._id.toString() === pid,
	);

	cart.products[index].quantity = quantity;
	const updateCart = await cartsRepository.findOneAndUpdate({ _id: cid }, cart);
	return updateCart;
};

const deleteOne = async param => {
	const { cid } = param;
	await cartsRepository.deleteOne({ _id: cid });
	return 'cart deleted';
};

const deleteOneProductOfCart = async params => {
	const { pid, cid } = params;
	const cart = await cartsRepository.findById(cid);
	const index = cart.products.findIndex(
		element => element.product._id.toString() === pid,
	);
	cart.products.splice(index, 1);
	const cartUpdated = await cartsRepository.findOneAndUpdate(
		{ _id: cid },
		cart,
	);
	return cartUpdated;
};

const deleteMany = async () => {
	try {
		await cartsRepository.deleteMany();
		return 'Carts deleted';
	} catch (error) {
		return error;
	}
};

module.exports = {
	find,
	findOne,
	findById,
	create,
	createProductInCart,
	updateQuantity,
	deleteOne,
	deleteOneProductOfCart,
	deleteMany,
};
