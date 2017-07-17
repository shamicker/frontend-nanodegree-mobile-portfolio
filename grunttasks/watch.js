module.exports = function(grunt) {
	grunt.config.merge({

		connect: {
            server: {
                options: {
                	keepalive: true,
                	open: true,
                	hostname: 'localhost',
                	// protocol: "https",
                    port: 2000,
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
				files: ['gruntfile.js', 'grunttasks/*.js', 'src/js/*.js', 'src/views/js/*.js'],
				tasks: ['jshint', 'uglify']
			},
			// js_copy: {
			// 	files: 'src/js/*.js',
			// 	tasks: ['jshint', 'copy', 'watch']
			// },
			css: {
				files: ['src/css/*.css', 'src/views/css/*.css','!src/css/*.min.css', '!src/vews/css/*.min.css'],
				tasks: ['cssmin']
			},
			html: {
				files: ['index-original.html', 'src/html/*.html', 'src/views/pizza.html'],
				tasks: ['critical', 'htmlmin', 'pagespeed', 'watch:options:livereload']
			},
			images: {
				files: ['src/img/*.{png,jpg,svg}', 'src/views/images/*.{png,jpg,svg}'],
				tasks: ['tinyimg', 'watch']
			},
			// copy: {
			// 	files: ["src/css/**", "src/html/**", "src/views/**"],
			// 	tasks: ['copy', 'watch']
			// },
			reports: {
				files: 'build/report.js',
				tasks: ['watch']
			}

		}

	});
};