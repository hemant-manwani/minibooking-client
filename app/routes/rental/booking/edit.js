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
      var rental_id = this.currentModel.data.rental_id
      var start = $('.start-at').val();
      var end = $('.end-at').val();
      Ember.$.ajax({
        type: 'GET',
        url: 'http://localhost:3000/rentals/' + rental_id + '?auth_token=f790216ba928874ebe19a240d54ce0',
        success: function (data) {
          var diff = new Date(end) - new Date(start);
          var days = diff/1000/60/60/24;
          if(!isNaN(diff)){
            $('#price-curr').html('USD ');
            $('#booking_price').text(days * data.rental.daily_rates);
          }  
        }
      });
    }
  }
});






