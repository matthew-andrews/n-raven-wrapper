'use strict';

if (process.env.NODE_ENV === 'production') {
	var client = new raven.Client(process.env.RAVEN_URL);
	module.exports = client;

	// Die on uncaughtException
	// https://github.com/getsentry/raven-node#catching-global-errors
	client.patchGlobal(function() {
		process.exit(1);
	});
} else {
	module.exports = {
		captureMessage: console.warn.bind(console),
		captureError: console.error.bind(console)
	};
}
