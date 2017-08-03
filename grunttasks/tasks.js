module.exports = function(grunt) {
  grunt.config.merge({
  // pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        "eqeqeq": true,
        reporterOutput: 'build/report.js'
      },
      psi90: ["gruntfile.js", "grunttasks/*.js", "src/js/*.js"],
      pizza: ["gruntfile.js", "grunttasks/*.js", "src/views/js/*.js"]
    },

    critical: {
      main: {
        options: {
          minify: true,
          // base: './',
          css: ['src/css/*.css']
        },
        files: [
          {src: 'index-original.html', dest: 'temp/index-criticaled.html'},
          {src: 'src/html/project-2048.html', dest: 'temp/html/project-2048.html'},
          {src: 'src/html/project-mobile.html', dest: 'temp/html/project-mobile.html'},
          {src: 'src/html/project-webperf.html', dest: 'temp/html/project-webperf.html'}
        ]
      // },
      // pizza: {
      //   options: {
      //     minify: true,
      //     // base: 'src/',
      //     css: ['src/views/css/*.css']
      //   },
      //   src: 'src/views/pizza.html',
      //   dest: 'temp/views/pizza.html'
      }
    },

    htmlmin: {
      static: {
        options: {
          html5: true,
          removeComments: true,
          collapseWhitespace: true
        },
        // destination: source
        files: [
          {'index.html': 'temp/index-criticaled.html'},
          {'build/views/pizza.html': 'src/views/pizza.html'}
        ]
      },
      dynamic: {
        options: {
          html5: true,
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'temp/',
          src: ['html/*.html'],
          dest: 'build/'
        }]
      }
    },

    cssmin: {
      target: {
        options: {
          // report: 'min',
          report: 'gzip'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['css/*.css', 'views/css/*.css', '!css/*.min.css', '!views/css/*min.css'],
          dest: 'build/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      target: {
        options: {
          compress: true,
          report: 'gzip',
          output: {
            comments: false
          }
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/**/*.js',
          dest: 'build/',
          ext: '.min.js'
        }]
      }
    },

    tinyimg: {
      dynamicTemp: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['img/*.{png,jpg,svg}'],
          dest: 'build/'
        },{
          expand: true,
          cwd: 'src/',
          src: ['views/images/*.{png,jpg,svg}'],
          dest: 'build/'
        }]
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: ['views/pizza.html'],
        dest: "build/"
      }
    }

  });
};