import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["page", "perPage"],
  content: {},

  page: Ember.computed.alias("content.page"),
  perPage: Ember.computed.alias("content.perPage"),
  totalPages: Ember.computed.alias("content.totalPages"),
})