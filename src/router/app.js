const { productsController, cartsController } = require('../controllers');

const router = app => {
	app.use('/api/products', productsController);
	app.use('/api/carts', cartsController);
};

module.exports = router;
