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
        src: [
          '<%= static_folder %>/js/factories.js',
          '<%= static_folder %>/js/services.js',
          '<%= static_folder %>/js/use_cases.js',
          '<%= static_folder %>/js/app.js'
        ],
        dest: '<%= static_folder %>/js/scripts.js'
      },
      json2: {
        src: [
          '<%= static_folder %>/js/json2.js',
          '<%= static_folder %>/js/json_parse.js',
          '<%= static_folder %>/js/json_parse_state.js',
          '<%= static_folder %>/js/cycle.js',
        ],
        dest: '<%= static_folder %>/js/json.js',
      },
      bootstrap: {
        src: '<%= static_folder %>/css/bootstrap.css',
        dest: '<%= build_folder %>/css/bootstrap.min.css'
      },
      font_awesome: {
        src: '<%= static_folder %>/css/font-awesome.css',
        dest: '<%= build_folder %>/css/font-awesome.min.css'
      },
      styles: {
        src: '<%= static_folder %>/css/main.css',
        dest: '<%= build_folder %>/css/main.min.css'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      jquery: {
        src: '<%= static_folder %>/js/jquery.js',
        dest: '<%= build_folder %>/js/jquery.min.js'
      },
      dist: {
        src: '<%= concat.scripts.dest %>',
        dest: '<%= build_folder %>/js/scripts.min.js'
      },
      bootstrap: {
        src: '<%= static_folder %>/js/bootstrap.js',
        dest: '<%= build_folder %>/js/bootstrap.min.js'
      },
      json2: {
        src: '<%= static_folder %>/js/json.js',
        dest: '<%= build_folder %>/js/json.min.js'
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
      data: {
        src: 'data/*.json'
      }
    },
    shell: {
      pelican: {
        options: {
          stdout: true
        },
        command: 'pelican content -s pelicanconf.py -t <%= theme_folder %>'
      },
      copy: {
        options: {
          stdout: true
        },
        command: 'cp -R data/ output/'
      }
    },
    watch: {
      lib_test: {
        files: '<%= static_folder %>/js/tests/*.test.js',
        tasks: ['karma']
      },
      statics: {
        files: ['<%= concat.scripts.src %>', '<%= concat.styles.src %>'],
        tasks: ['karma', 'concat', 'uglify'],
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
      data: {
        files: ['data/*.json'],
        tasks: ['jshint:data', 'shell:copy']
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['karma', 'jshint', 'concat', 'uglify', 'shell:pelican', 'shell:copy']);
  grunt.registerTask('server', ['build', 'connect', 'watch']);

};
