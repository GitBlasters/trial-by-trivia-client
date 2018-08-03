var app = app || {};

(function(module) {
  const quizView = {};

  quizView.score = 0;

  quizView.initQuizView = function() {
    let username = $('#user-name').val();
    $('.quiz-view').empty();
    $('.view-title').hide();
    $('.home-view').hide();
    $('.quiz-view').fadeIn(500);
    if (app.Quiz.currentQuestionIndex < app.Quiz.all.length) {
      $('.quiz-view').append(app.Quiz.all[app.Quiz.currentQuestionIndex].toHtml());
      $('.score').text(`Score: ${quizView.score}`);
    } else {
      const newUser = {
        username: username,
        score: app.quizView.score
      }
      app.User.create(newUser);
      app.User.fetchAll(() => app.scoreboardView.initScoreboardPage());
    }
    $('#quiz-list').on('click', '.question-answer', function() {
      app.quizView.username = $('#user-name').val();
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