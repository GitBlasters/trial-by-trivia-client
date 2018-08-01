'use strict';

var app = app || {};

(function(module){
  const Retriever = {};

  // Tom: this function generates a customized api URL based on the options selected by the user. It is called in home-view.js
  Retriever.setGameOptions = () => {
    let gameDifficulty = $('#difficulty-of-questions option:selected').val();
    let gameCategory = $('#type-of-questions option:selected').val();
    let url = '';
    if (gameCategory === 'any' && gameDifficulty === 'any') {
      url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    } else if (gameCategory !== 'any' && gameDifficulty === 'any') {
      url = `https://opentdb.com/api.php?amount=10&category=${gameCategory}&type=multiple`;
    } else if (gameCategory === 'any' && gameDifficulty !== 'any') {
      url = `https://opentdb.com/api.php?amount=10&difficulty=${gameDifficulty}&type=multiple`;
    } else {
      url = `https://opentdb.com/api.php?amount=10&category=${gameCategory}&difficulty=${gameDifficulty}&type=multiple`;
    }
    $.get(url)
      .then((data) => { app.Quiz.loadAll(data.results, app.quizView.initQuizView) })
      .then(console.log(app.Quiz.all));
  }

  module.Retriever = Retriever;
})(app)