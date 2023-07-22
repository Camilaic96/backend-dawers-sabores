/* eslint-disable no-useless-catch */
class CartsRepository {
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

	async create(newCartInfo) {
		try {
			return await this.dao.create(newCartInfo);
		} catch (error) {
			throw error;
		}
	}

	async updateOne(param, newCart) {
		try {
			return await this.dao.updateOne(param, newCart);
		} catch (error) {
			throw error;
		}
	}

	async findOneAndUpdate(param, newCart) {
		try {
			return await this.dao.findOneAndUpdate(param, newCart);
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

	async insertMany(newCarts) {
		try {
			return await this.dao.insertMany(newCarts);
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

module.exports = CartsRepository;
