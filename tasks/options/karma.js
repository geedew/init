/**
 * Configuration for Karma test-runner
 */
'use strict';

module.exports = {
	options: {
		configFile: 'karma.conf.js',

		proxies: {
			'/base': 'http://localhost:<%= connect.test.port %>'
		}
	},

	test: {
		options: {

			// Start these browsers
			browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],

			plugins: [
				'karma-jasmine',
				'karma-chrome-launcher',
				'karma-firefox-launcher',
				'karma-safari-launcher',
				'karma-phantomjs-launcher'
			]
		}
	},

	unit: {
		options: {

			// Use Phantom and Firefox for Travis
			browsers: ['PhantomJS', 'Firefox']
		}
	}
};
