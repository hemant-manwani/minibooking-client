import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  ajax: function(url, type, hash) {
    if (Ember.isEmpty(hash)) hash = {};
    if (Ember.isEmpty(hash.data)) hash.data = {};
    hash.data.auth_token = 'f790216ba928874ebe19a240d54ce0'; // Add an access token param.
    return this._super(url, type, hash);
  }
});
