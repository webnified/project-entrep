module.exports = function(grunt) {

	grunt.initConfig({

	  pkg: grunt.file.readJSON('package.json'),

	  // Recess
	  recess: {
		  	dist: {

		  		options: {
			  		compile: true,
			  		compress: true
			  	},
			  	files: {
			  		'css/style.css': ['less/*.less']
			  	}

		  	}
	  },

	  watch: {
		  	css: {
		  		files: ['less/*.less'],
		  		tasks: ['recess']
		  	}
	  }

	});

	// Load the tasks.
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default tasks.
  grunt.registerTask('default', ['recess']);


}