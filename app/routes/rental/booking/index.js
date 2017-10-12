import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {return this.store.findAll('booking');},
	actions: {
    delete(booking) {
      booking.deleteRecord();
      booking.save();
    },
    show(booking) {
      this.transitionTo('booking', booking);
    }
  }
});
