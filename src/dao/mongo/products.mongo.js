/* eslint-disable no-useless-catch */
const Product = require('../models/Products.model');

class ProductsMongoDAO {
	async find() {
		try {
			const products = await Product.find();
			return products;
		} catch (error) {
			return error;
		}
	}

	async findOne(param) {
		try {
			const product = await Product.findOne(param);
			return product;
		} catch (error) {
			return error;
		}
	}

	async findById(id) {
		try {
			const product = await Product.findById(id);
			return product;
		} catch (error) {
			throw error;
		}
	}

	async create(newProduct) {
		try {
			const product = await Product.create(newProduct);
			return product;
		} catch (error) {
			return error;
		}
	}

	async updateOne(param, newProduct) {
		try {
			const product = await Product.updateOne(param, newProduct);
			return product;
		} catch (error) {
			return error;
		}
	}

	async findOneAndUpdate(param, newProduct) {
		try {
			const product = await Product.findOneAndUpdate(param, newProduct, {
				new: true,
			});
			return product;
		} catch (error) {
			throw error;
		}
	}

	async deleteOne(param) {
		try {
			const product = await Product.deleteOne(param);
			return product;
		} catch (error) {
			return error;
		}
	}

	async insertMany(newProducts) {
		try {
			const products = await Product.insertMany(newProducts);
			return products;
		} catch (error) {
			return error;
		}
	}

	async deleteMany() {
		try {
			await Product.deleteMany();
			return 'Products deleted';
		} catch (error) {
			return error;
		}
	}
}
const Products = new ProductsMongoDAO();
module.exports = Products;
