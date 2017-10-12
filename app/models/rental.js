import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  daily_rates: DS.attr('string'),
  bookings: DS.hasMany('booking')
});
