'use strict';

module.exports = function(environment) {
  let ENV = {
    apollo: {
      //apiURL: '/api'
      apiURL:
        'http://node-express-env.zqxi3wpmdm.us-east-2.elasticbeanstalk.com/yelp'
    },
    modulePrefix: 'yelp-api-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCYk9ohI46Wh56PighPI-c0fjg2oWscFOA",
      authDomain: "wish-dish-favorites.firebaseapp.com",
      databaseURL: "https://wish-dish-favorites.firebaseio.com",
      projectId: "wish-dish-favorites",
      storageBucket: "wish-dish-favorites.appspot.com",
      messagingSenderId: "594740038507",
      appId: "1:594740038507:web:e928d2cfb82fdf780b9a2e"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }
  ENV['ember-google-maps'] = {
    key: "AIzaSyD4UwM2T1JiPpo9IJtfVAeAaOohW1OZD6Q", // Using .env files in this example
    language: 'en',
    region: 'GB',
    protocol: 'https',
    version: '3.35',
    libraries: ['geometry', 'places'], // Optional libraries
    // client: undefined,
    // channel: undefined,
    // baseUrl: '//maps.googleapis.com/maps/api/js'
  }
  return ENV;
};
