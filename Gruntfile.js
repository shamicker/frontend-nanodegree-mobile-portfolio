
var psiNgrok = require('psi-ngrok');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-tinyimg');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');

    require('./grunttasks/tasks.js')(grunt);
    // require('./grunttasks/images.js')(grunt);
    require('./grunttasks/watch.js')(grunt);

    // Pagespeed and Ngrok
    grunt.registerTask('pagespeed', function() {
        var async = this.async;

        grunt.event.on('connect.server.listening', function(host, port) {
          psiNgrok({
            port: port,
            // port: parseInt("<%= connect.server.options.port%>"),
            pages: [
                    // '/build/html/project-2048.html', 
                    // '/build/html/project-mobile.html', 
                    // '/build/html/project-webperf.html',
                    'index.html'
            ],
            onError: function(error) {
              grunt.log.error(error);
            },
            options: {
              threshold: 90
            }
          }).then(async());
        });
      });

    grunt.registerTask("live", ["connect", "watch"]);
    grunt.registerTask("psi", ["pagespeed", "connect"]);
    grunt.registerTask("pizza", ["jshint:pizza", "cssmin", "htmlmin:static", "uglify"]);
    grunt.registerTask("default", 
        ["jshint", 
        "critical",
        "htmlmin",
        "cssmin",
        "uglify",
        "tinyimg", 
        // "copy", 
        "pagespeed",
        // "connect"
        "live"
        ]);

};