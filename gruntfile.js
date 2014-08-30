module.exports = function(grunt) {

	grunt.initConfig({

	  pkg: grunt.file.readJSON('package.json'),
	  
	  // CSSJoin
    cssjoin: {
	    production : {
	      options: {
	        // Task-specific options go here.
	      },
	      your_target: {
	        // Target-specific file lists and/or options go here.
	      },
	    }
	  },

	  datauri: {
      default: {
        options: {
            classPrefix: 'data-'
        },
        src: [
          // Source file here.
        ],
        dest: [
          // Destination file go here.
        ]
      }
    }

	  // Recess
	  recess: {
		  	dist: {

		  		options: {
			  		compile: true,
			  		compress: true
			  	},
			  	files: {
			  		'css/responsive-styles.css': ['less/style.less']
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