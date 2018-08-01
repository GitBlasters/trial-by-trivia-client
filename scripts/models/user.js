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
    return app.render('scoreboard-template',this);
  }

  User.all = [];

  // load the above array with all the user data on the database
  User.loadAll = rows => {
    rows.sort((a,b) => {
      a.score - b.score;
    });

    User.all = rows.map(userObject => new User(userObject));
  };

  User.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/user_data`)
      .then(results => {
        User.loadAll(results);
        callback();
      })
      // .catch(errorCallback);
  }

  // after accepting and creating a new user, navigate to the quiz page to begin
  User.create = user =>
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/user_data`, user)
      .then(() => page('/quiz'))
      .catch(errorCallback);
  module.User = User;
})(app);