'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.initHomePage = () => {
    app.showOnly('.home-view');
    $('.view-title').show();
    app.Quiz.currentQuestionIndex = 0;
    app.Quiz.all = [];
    $('#trial-options').on('submit', (event) => {
      app.quizView.username = $('#user-name').val();
      event.preventDefault();
      app.Retriever.setGameOptions(app.quizView.username);
    })
  }
  module.homeView = homeView;
})(app)