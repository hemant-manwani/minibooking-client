import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
	model: function(params) {return this.store.find('booking', params.booking_id);},

  actions: {
    save: function() {  
      var self = this;
      self.controller.get('model').save().then(
        function() {
            self.transitionTo('rental.booking.index');
        }, function (error) {
            Ember.Logger.debug(error);
        });
    },

    cancel: function() {
      this.transitionTo('rental.booking.index');
    },
    
    calculatePrice(){
      const rental = this.modelFor('rental');
      var start = this.currentModel.start_at
      var end = this.currentModel.end_at
      var diff = new Date(end) - new Date(start);
      var days = diff/1000/60/60/24;
      if(!isNaN(diff)){
        $('#price-curr').html('USD ')
        $('#booking_price').html(days * rental.data.daily_rates);
      }  
    }
  }
});






