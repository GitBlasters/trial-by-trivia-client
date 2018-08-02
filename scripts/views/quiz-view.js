'use strict';

var app = app || {};

(function(module) {
  const quizView = {};

  quizView.score = 0;
  quizView.initQuizView = function() {
    $('.view-title').hide();
    $('.home-view').hide();
    $('.quiz-view').fadeIn(500);
    $('.quiz-view').empty();
    if (app.Quiz.currentQuestionIndex < app.Quiz.all.length) {
      $('.quiz-view').append(app.Quiz.all[app.Quiz.currentQuestionIndex].toHtml());
      $('.score').text(`Score: ${quizView.score}`);
    } else {
      // app.scoreboardView.initScoreboardPage();
      app.User.fetchAll(() => app.scoreboardView.initScoreboardPage());
    }
    $('#quiz-list').on('click', '.question-answer', function() {
      if ($(this).text() === app.Quiz.all[app.Quiz.currentQuestionIndex].correct_answer) {
        quizView.score += 1;
        $('.score').text(`Score: ${quizView.score}`);
        app.Quiz.currentQuestionIndex += 1;
        quizView.initQuizView();
      } else {
        app.Quiz.currentQuestionIndex += 1;
        quizView.initQuizView();
      }
    })
  }
  module.quizView = quizView;
})(app)