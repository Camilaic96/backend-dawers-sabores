const mongoose = require('mongoose');

const { MONGO_URL } = require('../src/config/index');

class MongoConnect {
	static #instance;

	constructor() {
		this.mongoConnect();
	}

	async mongoConnect() {
		try {
			mongoose.set('strictQuery', false);
			await mongoose.connect(MONGO_URL);
			console.log('Successful connections to db');
		} catch (error) {
			console.log(`Something went wrong. ${error}`);
		}
	}

	static getInstance() {
		if (!this.#instance) {
			this.#instance = new MongoConnect();
			return this.#instance;
		}
		return this.#instance;
	}
}

module.exports = MongoConnect;
