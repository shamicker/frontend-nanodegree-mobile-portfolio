module.exports = function(grunt) {
	grunt.config.merge({

		connect: {
            server: {
                options: {
                	keepalive: true,
                	open: true,
                	hostname: 'localhost',
                	// protocol: "https",
                    port: 8111,
                    locale: "en_GB",
                    // threshold: 90,
                    livereload: true
                }
            }
            // uses_defaults: {}
        },

		watch: {
			options: {
				spawn: false,
				livereload: "<%= connect.server.options.port%>"
				// livereload: 8000
				// reload: true
			},
			javascript: {
				files: ['gruntfile.js', 'grunttasks/*.js'],
				tasks: ['jshint']
			},
			js_copy: {
				files: 'src/js/*.js',
				tasks: ['jshint', 'copy', 'watch']
			},
			index: {
				files: ['index.html'],
				tasks: ['pagespeed', 'live']
			},
			copy: {
				files: ["src/css/**", "src/html/**", "src/img/**", "src/views/**"],
				tasks: ['copy:main', 'watch']
			},
			reports: {
				files: 'build/report.js',
				tasks: ['watch']
			}

		}

	});
};