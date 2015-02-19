module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Clean files from dist/ before build
    clean: {
      css: ["dist/*.css", "dist/*.css.map"],
      js: ["dist/*.js", "dist/*.js.map"],
      fonts: ["fonts/**"]
    },

    // Copy FontAwesome files to the fonts/ directory
    copy: {
      fonts: {
        src: [
          'bower_components/font-awesome/fonts/**'
        ],
        dest: 'fonts/',
        flatten: true,
        expand: true
      },
      leafletImg: {
        src: 'bower_components/leaflet/dist/images/**',
        dest: 'images/',
        flatten: true,
        expand: true
      },
      leafletCss: {
        src: 'bower_components/leaflet/dist/leaflet.css',
        dest: 'build/leaflet.less'
      }
    },

    // Transpile LESS
    less: {
      options: {
        sourceMap: true,
        paths: ['bower_components/bootstrap/less']
      },
      prod: {
        options: {
          compress: true,
          cleancss: true
        },
        files: {
          "dist/style.css": "src/css/style.less"
        }
      }
    },

    // Run our JavaScript through JSHint
    jshint: {
      js: {
        src: ['src/js/**/*.js']
      }
    },

    // Runs the r.js optimizer
    requirejs: {
      compile: {
        options: {
          baseUrl: 'src/js',
          mainConfigFile: 'src/js/config.js',
          out: 'dist/scripts.js',
          optimize: 'uglify2',
          include: [
            'app'
          ],
          name: '../../bower_components/almond/almond',
          generateSourceMaps: true,
          preserveLicenseComments: false
        }
      }
    },

    // Watch for changes in LESS and JavaScript files,
    // relint/retranspile when a file changes
    watch: {
      options: {
        livereload: true
      },
      markup: {
        files: ['index.php']
      },
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'clean:js', 'requirejs']
      },
      styles: {
        files: ['src/css/**.less'],
        tasks: ['clean:css', 'less']
      }
    }

  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'less', 'requirejs']);

};
