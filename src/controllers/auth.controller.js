const passport = require('passport');

const Route = require('../router/customRouter');
const usersService = require('../services/users.service');

class AuthRouter extends Route {
	init() {
		this.post(
			'/',
			passport.authenticate('login', ['PUBLIC'], {
				failureRedirect: '/api/auth/failLogin',
			}),
			async (req, res) => {
				try {
					const user = await usersService.updateLastConnectionLogin(req.user);
					req.session.user = user;
					res.sendSuccess(user);
				} catch (error) {
					console.log(error);
					res.sendServerError('Login failed');
				}
			},
		);

		this.get('/failLogin', ['PUBLIC'], (req, res) => {
			req.logger.error('Login failed');
			res.sendServerError('Login failed');
		});

		this.get('/logout', ['USER', 'ADMIN'], async (req, res) => {
			await usersService.updateLastConnectionLogin(req.session.user);
			req.session.destroy(error => {
				if (error) return res.json({ error });
				res.sendSuccess('session destroyed');
			});
		});
	}
}

const authRouter = new AuthRouter();
const authController = authRouter.getRouter();

module.exports = authController;
