module.exports = function(grunt) {
	grunt.config.merge({
		// pkg: grunt.file.readJSON('package.json'),

		jshint: {
            options: {
                "eqeqeq": true,
                reporterOutput: 'build/report.js'
            },
            all: ["gruntfile.js", "grunttasks/*.js", "src/js/*.js", "build/js/*.js"]
        },

        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: "**",
                dest: "build/"
            }
        }

	});
};