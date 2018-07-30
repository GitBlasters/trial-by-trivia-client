'use strict';

var app = app || {};

(function(module) {

  const quizView = {};

  quizView.initQuizPage = () => {
    app.showOnly('.quiz-view');

    // TODO - what input will this quiz accept?

  }
  module.quizView = quizView;
})(app)