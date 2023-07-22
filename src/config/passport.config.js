const passport = require('passport');
const local = require('passport-local');

const usersService = require('../services/users.service');
const UserDTO = require('../DTOs/User.dto');
const { comparePassword } = require('../utils/bcrypt.utils');

const LocalStrategy = local.Strategy;

const initializePassport = () => {
	passport.use(
		'register',
		new LocalStrategy(
			{ passReqToCallback: true, usernameField: 'email' },
			async (req, username, password, done) => {
				try {
					const user = await usersService.findOne({ email: username });
					if (user) {
						req.logger.error('User already exists');
						return done(null, false);
					}
					const newUserInfo = new UserDTO(req.body);
					return done(null, newUserInfo);
				} catch (error) {
					return done(error);
				}
			},
		),
	);

	passport.serializeUser((user, done) => {
		done(null, user.email);
	});

	passport.deserializeUser(async (email, done) => {
		const user = await usersService.findOne(email);
		done(null, user);
	});

	passport.use(
		'login',
		new LocalStrategy(
			{ usernameField: 'email' },
			async (username, password, done) => {
				try {
					const user = await usersService.findOne({ email: username });
					if (!user) {
						console.log('User not found');
						return done(null, false);
					}
					if (!comparePassword(password, user)) return done(null, false);
					return done(null, user);
				} catch (error) {
					return done(error);
				}
			},
		),
	);
};

module.exports = initializePassport;
