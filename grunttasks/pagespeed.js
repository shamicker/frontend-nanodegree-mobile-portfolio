module.exports = function(grunt) {
	grunt.config.merge({

        pagespeed: {
            options: {
                nokey: true,
                url: "http://localhost:8000"
            },
            prod: {
                options: {
                    url: "http://localhost:8000/",
                    locale: "en_GB",
                    strategy: ["desktop", "mobile"],
                    threshold: 90
                }
            },
            paths: {
                options: {
                    paths: ["/project-2048.html", "/project-mobile.html", "/project-webperf.html"],
                    locale: "en_GB",
                    strategy: ["desktop", "mobile"],
                    threshold: 90
                }
            }
        }

	});
};