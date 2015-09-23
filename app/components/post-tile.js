import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    delete(post) {
      if (confirm("Are you absolutely positive you want to get rid of this fascinating post??")) {
        this.sendAction('destroyPost', post);
      }
    },
    update(post, params) {
      this.sendAction('update', post, params);
      }
    }
});
