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
          "build/css/main.css": "less/main.less" // destination file and source file
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
    }
  });

  // A very basic default task.
  grunt.registerTask('default', ['less', 'watch']);

};