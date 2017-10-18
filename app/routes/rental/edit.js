import Ember from 'ember'

export default Ember.Route.extend({
  model(params) {
    return this.store.find('rental', params.rental_id)
  },

  actions: {

    save() {  
      this.controller.get('model').save().then(() => {
        this.transitionTo('rentals')
      }, (error) => {
          Ember.Logger.debug(error)
      })
    },

    cancel() {
      this.transitionTo('rentals')
    }
  }
  
})