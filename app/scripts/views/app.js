import $ from 'jquery';
import Backbone from 'backbone';

export default Backbone.View.extend({
  el: $('#app'),

  initialize (hash) {
    this.hash = hash;
    this.render();
  },

  render () {
    this.$el.html(`the hash is ${this.hash}`);
  }
});
