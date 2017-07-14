module.exports = function(grunt) {
	grunt.config.merge({

        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            prod: {
                options: {
                    url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            },
            paths: {
                options: {
                    paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        }

	});
};