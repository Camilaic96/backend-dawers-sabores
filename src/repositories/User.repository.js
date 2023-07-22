/* eslint-disable no-useless-catch */
class UsersRepository {
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

	async create(newUserInfo) {
		try {
			return await this.dao.create(newUserInfo);
		} catch (error) {
			throw error;
		}
	}

	async updateOne(param, newUser) {
		try {
			return await this.dao.updateOne(param, newUser);
		} catch (error) {
			throw error;
		}
	}

	async findOneAndUpdate(param, newUser) {
		try {
			return await this.dao.findOneAndUpdate(param, newUser);
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

	async insertMany(newUsers) {
		try {
			return await this.dao.insertMany(newUsers);
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

module.exports = UsersRepository;
