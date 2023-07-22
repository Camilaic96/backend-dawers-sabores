const Route = require('../router/customRouter');
const cartsService = require('../services/carts.service');

class CartRouter extends Route {
	init() {
		this.get('/', async (req, res) => {
			try {
				const carts = await cartsService.find();
				res.sendSuccess(carts);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.get('/:cid', async (req, res) => {
			try {
				const cartById = await cartsService.findById(req.params);
				res.sendSuccess(cartById);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.post('/', async (req, res) => {
			try {
				const carts = await cartsService.create();
				res.sendSuccess(carts);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.post('/:cid/products/:pid', async (req, res) => {
			try {
				const cart = await cartsService.createProductInCart(
					req.params,
					req.body,
				);
				res.sendSuccess(cart);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.put('/:cid/products/:pid', async (req, res) => {
			try {
				await cartsService.updateQuantity(req.params, req.body);
				res.sendSuccess('Quantity updated successfully');
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.delete('/:cid/products/:pid', async (req, res) => {
			try {
				await cartsService.deleteOneProductOfCart(req.params);
				res.sendSuccess('Product successfully removed from the cart.');
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.delete('/:cid', async (req, res) => {
			try {
				await cartsService.deleteOne(req.params);
				res.sendSuccess('Cart deleted successfully');
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		// Delete all carts db
		this.delete('/', async (req, res) => {
			await cartsService.deleteMany();
			res.json({ message: 'All carts deleted' });
		});
	}
}

const cartRouter = new CartRouter();
const cartsController = cartRouter.getRouter();

module.exports = cartsController;
