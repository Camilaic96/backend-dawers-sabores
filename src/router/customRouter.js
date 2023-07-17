const { Router } = require('express');

class Route {
	constructor() {
		this.router = Router();
		this.init();
	}

	getRouter() {
		return this.router;
	}

	init() {}

	get(path, ...callbacks) {
		this.router.get(
			path,
			this.generateCustomResponses,
			this.applyCallbacks(callbacks),
		);
	}

	post(path, ...callbacks) {
		this.router.post(
			path,
			this.generateCustomResponses,
			this.applyCallbacks(callbacks),
		);
	}

	put(path, ...callbacks) {
		this.router.put(
			path,
			this.generateCustomResponses,
			this.applyCallbacks(callbacks),
		);
	}

	patch(path, ...callbacks) {
		this.router.patch(
			path,
			this.generateCustomResponses,
			this.applyCallbacks(callbacks),
		);
	}

	delete(path, ...callbacks) {
		this.router.delete(
			path,
			this.generateCustomResponses,
			this.applyCallbacks(callbacks),
		);
	}

	applyCallbacks(callbacks) {
		return callbacks.map(callback => async (...params) => {
			try {
				await callback.apply(this, params);
			} catch (error) {
				console.log(error);
				params[1].status(500).send(error);
			}
		});
	}

	generateCustomResponses = (req, res, next) => {
		res.sendSuccess = payload => res.send({ status: 200, payload });
		res.sendSuccessCreated = payload => res.send({ status: 201, payload });
		res.sendServerError = error => res.send({ status: 500, error });
		res.sendUserError = error => res.send({ status: 400, error });
		next();
	};
}

module.exports = Route;
