module.exports = function(grunt) {
	grunt.config.merge({

		connect: {
            server: {
                options: {
                	open: true,
                	hostname: 'localhost',
                	// protocol: "https",
                    port: 8000,
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
				livereload: "<%= connect.server.options.livereload%>"
				// livereload: 8000
				// reload: true
			},
			javascript: {
				files: ['gruntfile.js', 'grunttasks/*.js', 'src/js/*.js'],
				tasks: ['jshint']
			},
			html: {
				files: ['index.html', "src/html/*.html"],
				tasks: ['watch']
			},
			reports: {
				files: 'build/report.js',
				tasks: ['watch']
			}
		}

	});
};