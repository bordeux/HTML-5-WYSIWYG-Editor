module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            app: {
                options: {
                    separator: ';\n',
                    banner: grunt.file.read("gruntConfig/concat.options.banner.js"),
                    footer: grunt.file.read("gruntConfig/concat.options.footer.js"),
                    process: eval(grunt.file.read("gruntConfig/concat.options.process.js"))
                },
                src: ['build/js/**/*.js'],
                dest: 'src/html5wysiwyg.jquery/html5wysiwyg.jquery.js'
            }
        },
        watch: {
            scripts: {
                files: ['build/js/**/*.js'],
                tasks: ['concat:app', "jsbeautifier:app", 'uglify']
            },
            css: {
                files: ['build/scss/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        sass: {
            dist: {
                files: {
                    'src/html5wysiwyg.jquery/html5wysiwyg.jquery.css': 'build/scss/style.scss'
                }
            }
        },
        "jsbeautifier" : {
            "default": {
                src : ["src/**/*.js"]
            },
            "app": {
                src : ["src/html5wysiwyg.jquery/html5wysiwyg.jquery.js"]
            },
        },
        uglify: {
            app: {
              files: {
                'src/html5wysiwyg.jquery/html5wysiwyg.jquery.min.js': ['src/html5wysiwyg.jquery/html5wysiwyg.jquery.js']
              }
            }
          },
          cssmin: {
            combine: {
              files: {
                'src/html5wysiwyg.jquery/html5wysiwyg.jquery.min.css': ['src/html5wysiwyg.jquery/html5wysiwyg.jquery.css']
              }
            }
          },
          'http-server': {
            'dev': {
                root: 'src/',
                port: 8282,
                host: "127.0.0.1",
                cache: 1,
                showDir : true,
                autoIndex: true,
                defaultExt: "html",
                runInBackground: true

            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-http-server');
    
    grunt.registerTask('default', ['jsbeautifier:default', 'uglify', 'concat', 'sass', 'http-server', 'cssmin','jsbeautifier:app', 'watch']);
};