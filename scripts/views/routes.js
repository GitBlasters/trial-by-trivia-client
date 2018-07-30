'use strict'

page('/'
  , ctx => app.homeView.initHomePage(ctx)
);
page('/quiz/'
  , ctx => app.quizView.initQuizPage(ctx)
);
page('/quiz/scoreboard'
  , ctx => app.scoreboardView.initScoreboardPage(ctx)
);
page('/about'
  , ctx => app.aboutView.initAboutPage(ctx)
);
page();