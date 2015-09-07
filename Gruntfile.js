/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    theme_folder: 'themes/django-girls-events',
    static_folder: '<%= theme_folder %>/static',
    build_folder: 'output/theme',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      scripts: {
        src: ['<%= static_folder %>/js/*.js'],
        dest: '<%= build_folder %>/js/scripts.js'
      },
      styles: {
        src: ['<%= static_folder %>/css/*.css'],
        dest: '<%= build_folder %>/css/styles.min.css'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.scripts.dest %>',
        dest: '<%= build_folder %>/js/scripts.min.js'
      }
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
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      karmaconf: {
        src: 'karma.conf.js',
      },
      files: {
        src: ['<%= static_folder %>/js/*.js', '<%= static_folder %>/js/tests/*.js']
      }
    },
    karma: {
      unit: {
        runnerPort: 9999,
        colors: true,
        singleRun: true,
        autoWatch: false,
        exclude: ['Gruntfile.js'],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        configFile: 'karma.conf.js',
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      },
      statics: {
        files: ['<%= concat.scripts.src %>', '<%= concat.styles.src %>'],
        tasks: ['concat', 'uglify'],
      },
      theme: {
        files: [
          '<%= theme_folder %>/templates/*.html',
          '<%= theme_folder %>/static/img/*.jpg',
          '<%= theme_folder %>/static/img/*.png',
          '<%= theme_folder %>/static/img/*.jpeg',
          '<%= theme_folder %>/static/img/*.gif',
          '<%= theme_folder %>/static/img/*.svg',
        ],
        tasks: ['shell:pelican']
      },
      options: {
        livereload: true
      }
    },
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 9000,
        }
      }
    },
    shell: {
      pelican: {
        options: {
          stdout: true
        },
        command: 'pelican content -s pelicanconf.py -t <%= theme_folder %>'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['karma', 'jshint', 'concat', 'uglify', 'shell:pelican']);
  grunt.registerTask('server', ['build', 'connect', 'watch']);

};
