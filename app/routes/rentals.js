import Ember from 'ember'
import RouteMixin from 'ember-cli-pagination/remote/route-mixin'

export default Ember.Route.extend(RouteMixin, {
  perPage: 10,

  model(params) {
    return this.findPaged('rental', params)
  },

  actions: {
    delete(rental) {
      rental.deleteRecord()
      rental.save()
    },
    show(rental) {
      this.transitionTo('rental', rental)
    }
  }
})
