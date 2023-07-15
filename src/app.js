/* eslint-disable n/no-path-concat */
const express = require('express');
const session = require('express-session');

const MongoConnect = require('../db');
const { sessionMongo } = require('./config/db.config');

const router = require('./router/app');

const app = express();

MongoConnect.getInstance();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session(sessionMongo));

router(app);

module.exports = { app };
