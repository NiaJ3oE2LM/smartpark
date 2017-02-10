module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
  options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['public/js/*.js'],
    // the location of the resulting JS file
    dest: 'public/ispark.js'
  }
},
uglify: {
  options: {
    // the banner is inserted at the top of the output
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  },
  dist: {
    files: {
      'public/ispark.min.js': ['<%= concat.dist.dest %>']
    }
  }
},
jshint: {
  // define the files to lint
  files: ['Gruntfile.js', 'public/js/*.js'],
  // configure JSHint (documented at http://www.jshint.com/docs/)
  options: {
    // more options here if you want to override JSHint defaults
    globals: {
      jQuery: true,
      console: true,
      module: true
    }
  }
},
watch: {
  files: ['<%= jshint.files %>'],
  tasks: ['jshint']
}
  });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
//grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');

// this would be run by typing "grunt test" on the command line
grunt.registerTask('test', ['jshint']);

// the default task can be run just by typing "grunt" on the command line
grunt.registerTask('default', ['concat', 'uglify']);

};
