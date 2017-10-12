import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {return this.store.find('rental', params.rental_id);},
  actions: {
    save: function() {  
      var self = this;
      self.controller.get('model').save().then(
        function() {
            self.transitionTo('rentals');
        }, function (error) {
            Ember.Logger.debug(error);
        });
    },
    cancel: function() {
      this.transitionTo('rentals');
    }
  }
});