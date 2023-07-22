const MongoConnect = require('../../db');
const { PERSISTENCE } = require('../config/index');

switch (PERSISTENCE) {
	case 'fs':
		module.exports = {
			ProductDao: require('./fs/products.fs'),
		};
		module.exports = require('./fs/products.fs');
		break;

	case 'mongo':
		MongoConnect.getInstance();
		module.exports = {
			ProductDao: require('./mongo/products.mongo'),
			CartDao: require('./mongo/carts.mongo'),
		};
		break;
}
