'use strict';
const crypto = require('crypto');

function randomId(options) {
	return new Promise((resolve, reject) => {
		const options_ = Object.assign({}, {length: 12}, options);

		crypto.randomBytes((Math.ceil(options_.length * 1.2)), (error, buffer) => {
			if (error) {
				reject(error);
			} else {
				resolve(
					buffer.toString('base64').replace(/\W/g, '').substring(0, options_.length)
				);
			}
		});
	});
}

randomId.sync = options => {
	const options_ = Object.assign({}, {length: 12}, options);

	return crypto
		.randomBytes((Math.ceil(options_.length * 1.2)))
		.toString('base64')
		.replace(/\W/g, '')
		.substring(0, options_.length);
};

module.exports = randomId;
module.exports.default = randomId;
