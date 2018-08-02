'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.initHomePage = () => {
    app.showOnly('.home-view');
    app.Quiz.currentQuestionIndex = 0;
    app.Quiz.all = [];
    $('#trial-options').on('submit', (event) => {
      event.preventDefault();
      app.Retriever.setGameOptions();
    })
  }
  module.homeView = homeView;
})(app)