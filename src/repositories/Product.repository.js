/* eslint-disable no-useless-catch */
class ProductsRepository {
	constructor(dao) {
		this.dao = dao;
	}

	async find() {
		try {
			return await this.dao.find();
		} catch (error) {
			throw error;
		}
	}

	async findOne(param) {
		try {
			return await this.dao.findOne(param);
		} catch (error) {
			throw error;
		}
	}

	async findById(id) {
		try {
			return await this.dao.findById(id);
		} catch (error) {
			throw error;
		}
	}

	async create(newProductInfo) {
		try {
			return await this.dao.create(newProductInfo);
		} catch (error) {
			throw error;
		}
	}

	async updateOne(param, newProduct) {
		try {
			return await this.dao.updateOne(param, newProduct);
		} catch (error) {
			throw error;
		}
	}

	async findOneAndUpdate(param, newProduct) {
		try {
			return await this.dao.findOneAndUpdate(param, newProduct);
		} catch (error) {
			throw error;
		}
	}

	async deleteOne(param) {
		try {
			return await this.dao.deleteOne(param);
		} catch (error) {
			throw error;
		}
	}

	async insertMany(newProducts) {
		try {
			return await this.dao.insertMany(newProducts);
		} catch (error) {
			throw error;
		}
	}

	async deleteMany() {
		try {
			return await this.dao.deleteMany();
		} catch (error) {
			throw error;
		}
	}
}

module.exports = ProductsRepository;
