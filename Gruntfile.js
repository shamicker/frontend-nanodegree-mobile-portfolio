module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

    require('./grunttasks/tasks.js')(grunt);
    require('./grunttasks/pagespeed.js')(grunt);
    require('./grunttasks/watch.js')(grunt);

    grunt.registerTask("live", ["connect", "watch"]);
    grunt.registerTask("default", ["jshint", "copy", "live"]);

};