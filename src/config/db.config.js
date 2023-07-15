require('dotenv');

const { MONGO_URL } = require('./index');

const MongoStore = require('connect-mongo');

const sessionMongo = {
	store: MongoStore.create({
		mongoUrl: MONGO_URL,
		mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
		ttl: 3600,
	}),
	secret: 'dawer',
	resave: false,
	saveUninitialized: false,
};

module.exports = { sessionMongo };
