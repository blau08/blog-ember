import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },


    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        description: this.get('description'),
        content: this.get('content'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    },

    hidePostForm() {
      this.set('updatePostForm', false);
    }
  }
});
