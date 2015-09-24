import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    save(params) {
      var newPost = this.store.createPost('post', params);
      newPost.save();
      this.transitionTo('index');
    },
  }
});
