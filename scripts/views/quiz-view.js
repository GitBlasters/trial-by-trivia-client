'use strict';

var app = app || {};

(function(module) {

  // Andy: theoretically should be getting rid of the log in info and 
  $('.input-name').on('submit' , function(event) {
    event.preventDefault();
    $('quiz-view').showOnly();
    $('.view-title').hide();
    $('#username-form').hide();
  });

  const quizView = {};

  quizView.initQuizPage = () => {
    app.showOnly('.quiz-view');

    // TODO - what input will this quiz accept?

  }

  module.quizView = quizView;
})(app)