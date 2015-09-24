import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,

  actions: {
    saveComment(post) {
      var params = {
        title: this.get('title'),
        response: this.get('response'),
        post: this.get('post'),
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    },
    showCommentForm() {
      this.set('addNewComment', true);
    }
  },
});
