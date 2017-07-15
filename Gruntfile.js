
var psiNgrok = require('psi-ngrok');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

    require('./grunttasks/tasks.js')(grunt);
    // require('./grunttasks/pagespeed.js')(grunt);
    require('./grunttasks/watch.js')(grunt);

    // Pagespeed and Ngrok
    grunt.registerTask('pagespeed', function() {
        var async = this.async;

        grunt.event.once('connect.server.listening', function(host, port) {
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
              grunt.fatal(error);
            },
            options: {
              threshold: 90
            }
          }).then(async());
        });
      });

    grunt.registerTask("live", ["pagespeed", "connect", "watch"]);
    grunt.registerTask("default", ["jshint", "copy", "live"]);

};