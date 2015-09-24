import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
     return this.store.findRecord('post', params.post_id)
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save().then(function(post) {
        post.reload();
      });
      this.transitionTo('individualpost', params.post);
    },
  }
});
