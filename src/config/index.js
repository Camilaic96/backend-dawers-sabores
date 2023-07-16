const dotenv = require('dotenv');
const { Command } = require('commander');

const command = new Command();

command.option('--mode <mode>', 'Environment').parse();

const { mode } = command.opts();

dotenv.config({
	path: `././.env.${mode}`,
});

const config = {
	mode,
	PORT: process.env.PORT || 8080,
	MONGO_URL: process.env.MONGO_URL,
	PERSISTENCE: process.env.PERSISTENCE || 'fs',
};

module.exports = config;
