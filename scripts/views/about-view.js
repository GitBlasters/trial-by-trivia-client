'use strict';

var app = app || {};

(function(module) {

  const aboutView = {};

  aboutView.initAboutPage = () => {
    app.showOnly('.about-view');
  }
  module.aboutView = aboutView;
})(app)