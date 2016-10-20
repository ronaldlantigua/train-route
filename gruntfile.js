module.exports = function(grunt) {
  //Registering module
  grunt.loadNpmTasks('grunt-contrib-less');
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "build/css/main.min.css": "less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    uglify: {
	    my_target: {
	      files: [{
	          expand: true,
	          cwd: 'build/js',
	          src: '**/*.js',
	          dest: 'build/js/'
	      }]
    	}
  	},
  	concat: {
	    basic: {
	        src: ['js/*.js'],
	        dest: 'build/js/main.min.js',
	    },
  	}
  });

  // A very basic default task.
  grunt.registerTask('default', ['concat','uglify', 'less', 'watch']);

};
