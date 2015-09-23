import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  content: DS.attr(),
  image: DS.attr()
});
