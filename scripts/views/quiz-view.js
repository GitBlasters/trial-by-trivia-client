'use strict';

var app = app || {};

(function(module) {
  const quizView = {};
  quizView.initQuizPage = () => {
    $('#trial-options').on('submit', (event) => {
      event.preventDefault();
      module.Retriever.setGameOptions();
      module.QuizView.initQuizPage();
      $('.view-title').hide();
      $('.home-view').hide();
      $('.quiz-view').show();
      // $('.quiz-view').append(app.render('question-template'))
    })
    $('.quiz-view').append(module.Quiz.all[0].toHtml());
    // });
  }

  module.quizView = quizView;
})(app)