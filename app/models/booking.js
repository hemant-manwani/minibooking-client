import DS from 'ember-data';

export default DS.Model.extend({
  start_at: DS.attr('string'),
  end_at: DS.attr('string'),
  client_email: DS.attr('string'),
  price: DS.attr('string'),
  rental_id: DS.attr('string'),
  rental: DS.belongsTo('rental')
});
