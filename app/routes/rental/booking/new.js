import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model() {
    return {};
  },
  renderTemplate() {
    this.render('rental.booking.new', { into: 'application' });
  },
  actions: {
    save() {
      const rental = this.modelFor('rental');
      const newBooking = this.get('store').createRecord('booking', this.currentModel);
      newBooking.set('rental', rental);
      newBooking.set('price', $('#booking_price').text())
      newBooking.save().then(() => {
        this.transitionTo('rental.booking.index');
      });
    },
    cancel() {
      this.transitionTo('rentals');
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