'use strict';

var app = app || {};

(function(module) {

  const scoreboardView = {};

  scoreboardView.initScoreboardPage = () => {
    app.Quiz.currentQuestionIndex = 0;
    $('.view-title').show();
    app.showOnly('.scoreboard-view');
    $('#scores').empty();
    for( let i=0; i <= app.User.all.length; i++) {

      $('#scores').append(app.render('scoreboard-template', app.User.all[i]));
    }
  }
  module.scoreboardView = scoreboardView;
})(app)