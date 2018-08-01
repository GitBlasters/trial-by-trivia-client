'use strict';

var app = app || {};

(function(module) {
  const QuizView = {};
  QuizView.initQuizPage = () => {
    $('#trial-options').on('submit' , function(event) {
      event.preventDefault();
      $('.view-title').hide();
      $('.home-view').hide();
      $('.quiz-view').show();
      // $('.quiz-view').append(app.render('question-template'))
      module.Quiz.all[0].incorrect_answers.forEach(question => $('.quiz-view').append(question.toHtml()));

    });
  }

  module.QuizView = QuizView;
})(app)