const {
	productsController,
	cartsController,
	usersController,
	authController,
} = require('../controllers');

const router = app => {
	app.use('/api/products', productsController);
	app.use('/api/carts', cartsController);
	app.use('/api/users', usersController);
	app.use('/api/auth', authController);
};

module.exports = router;
