'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.initHomePage = () => {
    app.showOnly('.home-view');

    $('#username-form').on('submit', (event) => {
      event.preventDefault();


      module.User.create(event.target.username.value);
    })
  }
  module.homeView = homeView;
})(app)