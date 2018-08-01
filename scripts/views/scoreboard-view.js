'use strict';

var app = app || {};

(function(module) {

  const scoreboardView = {};
  scoreboardView.dummyData =
  [
    {name: 'Gregor', score:100},
    {name: 'Bill', score:200},
    {name:'Joey', score:300},
  ]
  scoreboardView.initScoreboardPage = () => {
    app.showOnly('.scoreboard-view');
    $('#scores').empty();
    for( let i=0; i <= scoreboardView.dummyData.length; i++) {
      $('#scores').append(app.render('scoreboard-template', app.scoreboardView.dummyData[i]));
    }
  }
  module.scoreboardView = scoreboardView;
})(app)