/* eslint-env node */

module.exports = (environment) => {
  let ENV = {
    modulePrefix: 'minibooking-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
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
  }

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true
    ENV.APP.LOG_ACTIVE_GENERATION = true
    ENV.APP.LOG_TRANSITIONS = true
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    ENV.APP.LOG_VIEW_LOOKUPS = true
    ENV.APP.API_ENDPOINT = "http://localhost:3000"
    ENV.APP.AUTH_TOKEN = "f790216ba928874ebe19a240d54ce0"
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
    ENV.APP.API_ENDPOINT = process.env.API_URL
    ENV.APP.AUTH_TOKEN = process.env.AUTH_TOKEN
  }

  return ENV
}
