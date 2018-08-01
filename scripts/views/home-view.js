'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.initHomePage = () => {
    app.showOnly('.home-view');

    $('#trial-options').on('submit', (event) => {
      event.preventDefault();
      module.Retriever.setGameOptions();
      module.QuizView.initQuizPage();

      // Tom: going to need to initiate quiz-view somewhere in here
      // let userData = {
      //   userName: event.target.username.value,
      //   score: 0,
      // };

      // module.User.create(userData);
    })
  }
  module.homeView = homeView;
})(app)