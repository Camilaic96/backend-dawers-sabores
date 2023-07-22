const passport = require('passport');
const Route = require('../router/customRouter');
const usersService = require('../services/users.service');

class UserRouter extends Route {
	init() {
		this.post(
			'/',
			passport.authenticate('register', {
				failureRedirect: '/api/users/failRegister',
			}),
			async (req, res) => {
				try {
					const newUser = await usersService.create(req.user);
					req.session.user = newUser;
					res.sendSuccess(req.session.user);
				} catch (error) {
					if (error.code === 11000)
						return res.sendUserError('The user already exists');
					res.sendServerError(`Something went wrong. ${error}`);
				}
			},
		);

		this.get('/failRegister', (req, res) => {
			console.log('Registration failed');
			res.sendServerError('Registration failed');
		});
	}
}

const userRouter = new UserRouter();
const usersController = userRouter.getRouter();

module.exports = usersController;
