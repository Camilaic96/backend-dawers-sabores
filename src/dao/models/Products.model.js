const mongoose = require('mongoose');

const productCollection = 'product';

const productSchema = new mongoose.Schema({
	name: String,
	variety: String,
	presentation: String,
	producer: String,
	category: String,
	subcategory: String,
	price: Number,
	promoPrice: Array,
	stock: Number,
	status: {
		type: Boolean,
		default: true,
	},
});

const Product = mongoose.model(productCollection, productSchema);

module.exports = Product;
