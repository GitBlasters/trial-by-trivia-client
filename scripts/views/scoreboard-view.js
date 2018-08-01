'use strict';

var app = app || {};

(function(module) {

  const scoreboardView = {};
  scoreboardView.dummyData = app.User.all;
  // [
  //   {username: 'Gregor', score:100},
  //   {username: 'Bill', score:200},
  //   {username:'Joey', score:300},
  // ];
  scoreboardView.initScoreboardPage = () => {
    scoreboardView.dummyData = app.User.all;
    app.showOnly('.scoreboard-view');
    $('#scores').empty();
    for( let i=0; i <= scoreboardView.dummyData.length; i++) {
      $('#scores').append(app.render('scoreboard-template', app.scoreboardView.dummyData[i]));
    }
  
    // $.get(url)
    //   .then((data) => { app.Quiz.loadAll(data.results, app.quizView.initQuizView) })
    //   .then(console.log(app.Quiz.all));

  }
  module.scoreboardView = scoreboardView;
})(app)