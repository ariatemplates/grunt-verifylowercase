module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },

    nodeunit: {
      files: ['test/**/*.js']
    },

    verifylowercase : {
        all : {
            files : ['test/fixtures/one/**', 'test/fixtures/two/**']
        },
        one : {
            files : 'test/fixtures/one/**'
        },
        two : {
            files : 'test/fixtures/two/*' // as a string
        }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.renameTask('test', 'nodeunit');
  grunt.registerTask('test', 'verifylowercase:all verifylowercase:one verifylowercase:two nodeunit');

  // Default task.
  grunt.registerTask('default', 'lint test');

};
