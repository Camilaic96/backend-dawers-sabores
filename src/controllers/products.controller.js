const Route = require('../router/customRouter');
const productsService = require('../services/products.service');

class ProductRouter extends Route {
	init() {
		this.get('/', async (req, res) => {
			try {
				const products = await productsService.find();
				res.sendSuccess(products);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.get('/:pid', async (req, res) => {
			try {
				const product = await productsService.findById(req.params);
				res.sendSuccess(product);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.post('/', async (req, res) => {
			try {
				const product = await productsService.create(req.body);
				res.sendSuccess(product);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.put('/:pid', async (req, res) => {
			try {
				const product = await productsService.findOneAndUpdate(
					req.params,
					req.body,
				);
				res.sendSuccess(product);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.delete('/:pid', async (req, res) => {
			try {
				await productsService.deleteOne(req.params);
				res.sendSuccess('product deleted');
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.post('/loadintodb', async (req, res) => {
			try {
				const products = await productsService.insertMany();
				res.sendSuccess(products);
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});

		this.delete('/', async (req, res) => {
			try {
				await productsService.deleteMany();
				res.sendSuccess('All products deleted');
			} catch (error) {
				res.sendServerError(`Something went wrong. ${error}`);
			}
		});
	}
}

const productRouter = new ProductRouter();
const productsController = productRouter.getRouter();

module.exports = productsController;
