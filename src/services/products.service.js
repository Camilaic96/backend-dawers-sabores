/* eslint-disable no-useless-catch */
const { productsRepository } = require('../repositories');

const FilesDao = require('../dao/fs/files.fs');
const FilesManager = new FilesDao('products.json');

const find = async () => {
	try {
		const products = await productsRepository.find();
		return products;
	} catch (error) {
		throw error;
	}
};

const findOne = async param => {
	try {
		const product = await productsRepository.findOne(param);
		return product;
	} catch (error) {
		throw error;
	}
};

const findById = async param => {
	try {
		const { pid } = param;
		const product = await productsRepository.findById(pid);
		return product;
	} catch (error) {
		throw error;
	}
};

const create = async body => {
	try {
		const {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
			promoPrice,
			stock,
			status,
		} = body;

		if (
			!name ||
			!variety ||
			!presentation ||
			!producer ||
			!category ||
			!subcategory ||
			!price ||
			!stock ||
			!status
		) {
			return 'Missing data';
		}
		const newProduct = {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
			promoPrice,
			status,
			stock,
		};
		const product = productsRepository.create(newProduct);
		return product;
	} catch (error) {
		throw error;
	}
};

const updateOne = async (param, body) => {
	try {
		const { pid } = param;
		const {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
			promoPrice,
			stock,
			status,
		} = body;

		if (
			!name ||
			!variety ||
			!presentation ||
			!producer ||
			!category ||
			!subcategory ||
			!price ||
			!stock ||
			!status
		) {
			return 'Missing data';
		}
		const newInfoProduct = {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
			promoPrice,
			status,
			stock,
		};

		const product = await productsRepository.updateOne(
			{ _id: pid },
			newInfoProduct,
		);
		return product;
	} catch (error) {
		throw error;
	}
};

const findOneAndUpdate = async (param, body) => {
	try {
		const { pid } = param;
		const {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
			promoPrice,
			stock,
			status,
		} = body;

		if (
			!name ||
			!variety ||
			!presentation ||
			!producer ||
			!category ||
			!subcategory ||
			!price ||
			!stock ||
			!status
		) {
			return 'Missing data';
		}
		const newInfoProduct = {
			name,
			variety,
			presentation,
			producer,
			category,
			subcategory,
			price,
			promoPrice,
			status,
			stock,
		};

		const product = await productsRepository.findOneAndUpdate(
			{ _id: pid },
			newInfoProduct,
		);
		return product;
	} catch (error) {
		throw error;
	}
};

const deleteOne = async param => {
	const { pid } = param;
	await productsRepository.deleteOne({ _id: pid });
	return 'product deleted';
};

const insertMany = async () => {
	try {
		const newProducts = await FilesManager.loadItems();
		const products = await productsRepository.insertMany(newProducts);
		return products;
	} catch (error) {
		throw error;
	}
};

const deleteMany = async () => {
	try {
		await productsRepository.deleteMany();
		return 'Products deleted';
	} catch (error) {
		return error;
	}
};

module.exports = {
	find,
	findOne,
	findById,
	create,
	updateOne,
	findOneAndUpdate,
	deleteOne,
	insertMany,
	deleteMany,
};
