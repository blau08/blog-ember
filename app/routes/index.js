import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save(params) {
      var newPost = this.store.createPost('post', params);
      newPost.save();
      this.transitionTo('index');
      debugger;
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          debugger;
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
  }
});
