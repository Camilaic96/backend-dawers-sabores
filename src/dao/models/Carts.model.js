const mongoose = require('mongoose');

const cartCollection = 'cart';

const cartSchema = new mongoose.Schema({
	products: {
		type: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'product',
				},
				quantity: Number,
			},
		],
		default: [],
	},
});

cartSchema.pre('findOne', function () {
	this.populate('products.product');
});

const Cart = mongoose.model(cartCollection, cartSchema);

module.exports = Cart;
