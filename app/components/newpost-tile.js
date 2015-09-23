import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        author: this.get('author'),
        description: this.get('description'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});
