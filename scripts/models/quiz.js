'use strict';
// sample info
// {"category":"Mythology","type":"multiple","difficulty":"easy","question":"This Greek goddess&#039;s name was chosen for the dwarf planet responsible for discord on Pluto&#039;s classification amongst astronomers.","correct_answer":"Eris","incorrect_answers":["Charon","Ceres","Dysnomia"]}
var app = app || {};

(function (module){

  let parsedData = JSON.parse($.get(`https://opentdb.com/api.php?amount=10`));
console.log(parsedData);
 
  });
  
  // .then(console.log)

  // var data = JSON.parse(this.response);

// if (request.status >= 200 && request.status < 400) {
//   });
// } else {
//   console.log('error');
// }

  function Question (rawDataObject) {
    Object.keys(rawDataObject).forEach(key => this[key] = rawDataObject[key]);
  }

  Question.prototype.toHtml = function () {
    // $.get(`https://opentdb.com/api.php?amount=10`);
    let template = Handlebars.compile($('#question-template').html());
    let answers = [];
    answers.push(this.correct_answer);
    this.incorrect_answer.forEach(inst => answers.push(inst));

    this.answer1 = answers[0];
    this.answer2 = answers[1];
    this.answer3 = answers[2];
    this.answer4 = answers[3];

    return template(this)
    
  };
  Question(parsedData);
})(app);