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
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post', post);
    },
  }
});
