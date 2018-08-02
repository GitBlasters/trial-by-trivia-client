'use strict';

var app = app || {};

(function(module) {
  const quizView = {};

  quizView.initQuizView = function() {
    $('.view-title').hide();
    $('.home-view').hide();
    $('.quiz-view').fadeIn(300);
    $('.quiz-view').empty();
    if (app.Quiz.currentQuestionIndex < app.Quiz.all.length) {
      $('.quiz-view').append(app.Quiz.all[app.Quiz.currentQuestionIndex].toHtml());
    } else {
      app.scoreboardView.initScoreboardPage();
      app.Quiz.currentQuestionIndex = 0;
    }
    $('#quiz-list').on('click', '.question-answer', function(event) {
      event.preventDefault();
      console.log('clicked');
      $(this).siblings().removeClass('selected');
      $(this).addClass('selected');
      if ($(this).text() === app.Quiz.all[app.Quiz.currentQuestionIndex].correct_answer) {
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