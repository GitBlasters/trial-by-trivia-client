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

  User.prototype.toHtml = function(){
    return app.render('user-score-template',this);
  }

  User.all = [];

  User.loadAll = rows => User.all = rows.sort((a,b) => a.score - b.score).map(user => new User(user));






















})(app);