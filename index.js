//var readlineSync =  require(readline-sync);//won't work as readline-sync is not put as string. Give the package name as string

var readlineSync = require("readline-sync");
var score = 0
var userName = readlineSync.question("what's your name?")
console.log("welcome " + userName + " , I am Hara. Let's check how much you know me")
//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log("right");
    score = score + 1;
    //console.log("score is " + score);
  } else {
    console.log("wrong");
    score = score - 1;
    //console.log("score is " + score);
  }
  console.log("your score is " + score); //either of if works or else works, this will work at last
}
//play("Where do I live", "Bangalore");
//play("What's my favourite hero", "Batman")

//better make array of objects as below instead of above two
var questionOne = {
  question: "Where do I live",
  answer: "Bangalore"
}
var questionTwo = {
  question: "What's my favourite hero",
  answer: "Batman"
}
var questionThree = {
  question: "What's my car",
  answer: "Maruti"
}
var questionFour = {
  question: "What's my pet name",
  answer: "Tipu"
}
var questionFive = {
  question: "What's my favourite colour",
  answer: "Blue"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive]


//for loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("This is end of quiz, you scored: " + score);