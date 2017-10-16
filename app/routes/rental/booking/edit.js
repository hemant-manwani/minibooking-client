import Ember from 'ember'
import $ from 'jquery'

export default Ember.Route.extend({

	model(params) {
    return this.store.find('booking', params.booking_id)
  },

  actions: {
    save() {  
      this.controller.get('model').save().then(() => {
        this.transitionTo('rental.booking.index')
      }, (error) => {
        Ember.Logger.debug(error)
      })
    },

    cancel() {
      this.transitionTo('rental.booking.index')
    },

    calculatePrice(){
      const rental = this.modelFor('rental')
      const start = this.currentModel.start_at
      const end = this.currentModel.end_at
      const diff = new Date(end) - new Date(start)
      const days = diff/1000/60/60/24
      if(!isNaN(diff)){
        $('#price-curr').html('USD ')
        $('#booking_price').html(days * rental.data.daily_rates)
      }  
    }
  }
})






