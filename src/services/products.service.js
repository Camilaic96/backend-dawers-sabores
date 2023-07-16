/* eslint-disable no-useless-catch */
const productsService = require('../repositories');

const find = async () => {
	try {
		const products = await productsService.find();
		return products;
	} catch (error) {
		throw error;
	}
};

const insertMany = async newProducts => {
	try {
		const products = await productsService.insertMany(newProducts);
		return products;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	find,
	insertMany,
};
