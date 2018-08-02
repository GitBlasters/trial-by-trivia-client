'use strict'

page('/'
  , ctx => app.homeView.initHomePage(ctx)
);
page('/quiz/'
  , ctx => app.Retriever.setGameOptions(ctx)
);
page('/quiz/scoreboard'
  , ctx => app.User.fetchAll(() => app.scoreboardView.initScoreboardPage(ctx))
);
page('/about'
  , ctx => app.aboutView.initAboutPage(ctx)
);
page();