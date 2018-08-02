'use strict';

var app = app || {};

(function(module){
  function errorCallback(err){
    console.log(err);
    app.errorView.initErrorPage(err);
  }

  function User(rawUserObj){
    Object.keys(rawUserObj).forEach(key => this[key] = rawUserObj[key]);
  }

  // prototype for making username & score html content to render in scoreboard
  User.prototype.toHtml = function(){
    return app.render('scoreboard-template',this);
  }

  User.all = [];

  // load the above array with all the user data on the database
  User.loadAll = (rows) => {
    User.all = rows.sort((a, b) => b.score - a.score).map(user => new User(user));
  }

  User.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/user_data`)
      .then(app.User.loadAll)
      .then(callback)
      .fail(errorCallback);

  // after accepting and creating a new user, navigate to the quiz page to begin
  User.create = user =>
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/user_data`, user)
      .fail(errorCallback);
  module.User = User;
})(app);