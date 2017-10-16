import DS from 'ember-data'
import $ from 'jquery'
import Ember from 'ember'
import config from '../config/environment'

export default DS.RESTAdapter.extend({
  host: config.APP.API_ENDPOINT,

  ajax(url, type, hash) {
    if (Ember.isEmpty(hash)) hash = {}
    if (Ember.isEmpty(hash.data)) hash.data = {}
    hash.data.auth_token = config.APP.AUTH_TOKEN
    return this._super(url, type, hash)
  },

  isInvalid(status, headers, payload) { 
    $('.validation-error').html('')
    if (status===422) { 
      $.each( payload.errors, ( key, value ) => {
        $('.validation-error').append(`${Ember.String.classify(key)}:${value}<br/>`);
      })
    }
  }
})
