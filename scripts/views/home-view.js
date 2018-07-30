'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.initHomePage = () => {
    app.showOnly('.home-view');

    $('#username-form').on('submit', (event) => {
      event.preventDefault();


      let userData = {
        title: event.target.username.value,
        score: 0,
      };

      module.User.create(userData);
    })
  }
  module.homeView = homeView;
})(app)