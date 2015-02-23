module.exports = function(grunt) {
	// Project configuration.
	grunt
		.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			uglify: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				build: {
					src: 'src/<%= pkg.name %>.js',
					dest: 'build/<%= pkg.name %>.min.js'
				}
			},
			jshint: {
				// beforeconcat: ['src/app/**/*.js'],
				// afterconcat: ['build/output.js']
				files: {
					src: ['src/app/**/*.js']
				}
			},
			jasmine: {
				codeCamp: {
					src: 'src/app/**/*.js',
					options: {
						specs: 'spec/*Spec.js',
						vendor: 'src/vendor/**/*.js',
						outfile: 'spec/reports/_SpecRunner.html',
						keepRunner: 'true', // keep SpecRunner/outfile file
						template: require('grunt-template-jasmine-istanbul'),
						templateOptions: {
							coverage: 'spec/reports/coverage.json',
							report: [{
								type: 'html',
								options: {
									dir: 'spec/reports/html'
								}
							}, {
								type: 'cobertura',
								options: {
									dir: 'spec/reports/cobertura'
								}
							}, {
								type: 'text-summary'
							}]
						}
					}
				}
			},
			watch: {
				scripts: {
					files: ['src/app/**/*.js'],
					tasks: ['jasmine', 'jshint'],
					options: {
						spawn: false,
					},
				},
			}
		});

	// load
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// register
	grunt.registerTask('default', ['uglify', 'jasmine', 'jshint']);
};