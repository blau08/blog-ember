import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('newpost');
  this.route('individualpost', {path: 'individualpost/:post_id'});
});

export default Router;
