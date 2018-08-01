'use strict';
// sample info
// {"category":"Mythology","type":"multiple","difficulty":"easy","question":"This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.","correct_answer":"Eris","incorrect_answers":["Charon","Ceres","Dysnomia"]}
var app = app || {};

(function(module) {

  Quiz.all = [];

  function Quiz(rawDataObject) {
    Object.keys(rawDataObject).forEach(key => this[key] = rawDataObject[key]);
  }

  // Quiz.prototype.toHtml = function () {
  //   let template = Handlebars.compile($('#question-template').html());
  //   let answers = [1, 2, 3, 4];
  //   // answers.push(this.correct_answer);
  //   // this.incorrect_answer.forEach(inst => answers.push(inst));

  //   this.answer1 = answers[0];
  //   this.answer2 = answers[1];
  //   this.answer3 = answers[2];
  //   this.answer4 = answers[3];

  //   return template(this) 
  // };

  Quiz.prototype.toHtml = function () {
    let template = Handlebars.compile($('#question-template').html());
    let answers = [this.correct_answer];
    this.incorrect_answers.forEach(item => answers.push(item));
    this.answer1 = answers[0];
    this.answer2 = answers[1];
    this.answer3 = answers[2];
    this.answer4 = answers[3];
    return template(this)
  };

  Quiz.loadAll = (questions) => {
    Quiz.all = questions.map(ele => new Quiz(ele));
    console.log(Quiz.all);
  };

  module.Quiz = Quiz;
})(app);