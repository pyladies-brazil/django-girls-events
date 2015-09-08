// Karma configuration
// Generated on Sun Sep 06 2015 23:27:12 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({
    logLevel: config.LOG_INFO,
    plugins:[
      'karma-jasmine',
      'karma-phantomjs-launcher',
    ],
    files: [
      'themes/django-girls-events/static/js/jquery.js',
      'themes/django-girls-events/static/js/*.js',
      'themes/django-girls-events/static/js/tests/*.test.js'
    ],
  });
};
