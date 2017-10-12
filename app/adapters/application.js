import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  ajax: function(url, type, hash) {
    if (Ember.isEmpty(hash)) hash = {};
    if (Ember.isEmpty(hash.data)) hash.data = {};
    hash.data.auth_token = 'f790216ba928874ebe19a240d54ce0'; // Add an access token param.
    return this._super(url, type, hash);
  },
  isInvalid(status, headers, payload){ 
    $('.validation-error').html('');
    var errors = []
    if (status===422) { 
      $.each( payload.errors, function( key, value ) {
        $('.validation-error').append(Ember.String.classify(key) + ": " + value + '<br/>');
      });
    }
  }
});
