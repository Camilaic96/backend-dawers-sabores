/* eslint-disable n/no-path-concat */
const express = require('express');

const router = require('./router/app');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

router(app);

module.exports = { app };
