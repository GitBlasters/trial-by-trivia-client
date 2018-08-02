'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.initHomePage = () => {
    app.showOnly('.home-view');
    $('#trial-options').on('submit', (event) => {
      event.preventDefault();
      app.Retriever.setGameOptions();
      // at this point we should have a populated quiz.all array
    })
  }
  module.homeView = homeView;
})(app)