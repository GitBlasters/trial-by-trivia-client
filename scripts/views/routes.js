'use strict'

page('/'
  , ctx => app.homeView.initHomePage(ctx)
);
page('/quiz/'
  , ctx => app.quizView.initQuizPage(ctx)
);
page('/quiz/scoreboard'
  , ctx => app.User.fetchAll(app.scoreboardView.initScoreboardPage())
);
page('/about'
  , ctx => app.aboutView.initAboutPage(ctx)
);
page();