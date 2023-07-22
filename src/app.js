/* eslint-disable n/no-path-concat */
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const { sessionMongo } = require('./config/db.config');
const initializePassport = require('./config/passport.config.js');

const router = require('./router/app');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session(sessionMongo));
initializePassport();
app.use(passport.initialize());

router(app);

module.exports = { app };
