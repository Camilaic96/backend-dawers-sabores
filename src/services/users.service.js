/* eslint-disable no-useless-catch */
const { usersRepository } = require('../repositories');
const UserDTO = require('../DTOs/User.dto');
const { hashPassword } = require('../utils/bcrypt.utils');
const cartsService = require('./carts.service');

const findOne = async param => {
	try {
		const user = await usersRepository.findOne(param);
		return user;
	} catch (error) {
		throw error;
	}
};

const findById = async param => {
	try {
		const { cid } = param;
		const user = await usersRepository.findById(cid);
		return user;
	} catch (error) {
		throw error;
	}
};

const create = async body => {
	try {
		const newUserInfo = new UserDTO(body);
		newUserInfo.password = hashPassword(newUserInfo.password);
		newUserInfo.cart = await cartsService.create();
		const newUser = await usersRepository.create(newUserInfo);
		return newUser;
	} catch (error) {
		throw error;
	}
};

const updateLastConnectionLogin = async userInfo => {
	try {
		const user = new UserDTO(userInfo);
		user.last_connection.login_date = Date.now();
		const newUser = await usersRepository.findOneAndUpdate(
			{ _id: user._id },
			user,
		);
		return newUser;
	} catch (error) {
		throw error;
	}
};

const updateLastConnectionLogout = async userInfo => {
	try {
		const user = new UserDTO(userInfo);
		user.last_connection.logout_date = Date.now();
		const newUser = await usersRepository.findOneAndUpdate(
			{ _id: user._id },
			user,
		);
		return newUser;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	findOne,
	findById,
	create,
	updateLastConnectionLogin,
	updateLastConnectionLogout,
};
