'use strict';

var app = app || {};

(function(module){
  function errorCallback(err){
    console.log(err);
    module.errorView.initErrorPage(err);
  }

  function User(rawUserObj){
    Object.keys(rawUserObj).forEach(key => this[key] = rawUserObj[key]);
  }

  // prototype for making username & score html content to render in scoreboard
  User.prototype.toHtml = function(){
    return app.render('user-score-template',this);
  }

  User.all = [];

  User.loadAll = rows => User.all = rows.sort((a,b) => a.score - b.score).map(user => new User(user));

  // after accepting and creating a new user, navigate to the quiz page to begin
  User.create = user =>
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/user`, user)
      .then(() => page('/quiz'))
      .catch(errorCallback);

})(app);