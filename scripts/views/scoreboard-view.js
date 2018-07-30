'use strict';

var app = app || {};

(function(module) {

  const scoreboardView = {};

  scoreboardView.initScoreboardPage = () => {
    app.showOnly('.scoreboard-view');
  }
  module.scoreboardView = scoreboardView;
})(app)