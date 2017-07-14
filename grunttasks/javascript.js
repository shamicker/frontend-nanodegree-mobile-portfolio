module.exports = function(grunt) {
	grunt.config.merge({
		// pkg: grunt.file.readJSON('package.json'),

		jshint: {
            options: {
                "eqeqeq": true,
                reporterOutput: 'build/report.js'
            },
            all: ["gruntfile.js", "js/perfmatters.js", "grunttasks/*.js"]
        }

	});
};