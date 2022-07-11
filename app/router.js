import EmberRouter from '@ember/routing/router';
import config from 'bank-front-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('admin', function () {
    this.route('home');
  });

  this.route('auth', function () {
    this.route('adminlogin');
    this.route('userlogin');
    this.route('usersignup');
    this.route('verify');
  });

  this.route('user', function () {
    this.route('home');
  });
});
