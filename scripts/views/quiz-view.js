'use strict';

var app = app || {};

(function(module) {
  const quizView = {};
  quizView.initQuizView = () => {
      $('.view-title').hide();
      $('.home-view').hide();
      $('.quiz-view').show();
    $('.quiz-view').append(app.Quiz.all[0].toHtml());
  }

  module.quizView = quizView;
})(app)