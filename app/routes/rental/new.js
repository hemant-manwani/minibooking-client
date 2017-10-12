import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      const newRental = this.get('store').createRecord('rental', this.currentModel);
      newRental.save().then((rental) => {
        this.transitionTo('rental', rental);
      });
    },
    cancel() {
      this.transitionTo('rentals');
    }
  }
});