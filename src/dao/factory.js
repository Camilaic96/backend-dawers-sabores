const MongoConnect = require('../../db');
const { PERSISTENCE } = require('../config/index');

switch (PERSISTENCE) {
	case 'fs':
		module.exports = require('./fs/products.fs');
		break;

	case 'mongo':
		MongoConnect.getInstance();
		module.exports = require('./mongo/products.mongo');
		break;
}
