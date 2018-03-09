'use strict';
var userName = prompt('What is your name?'); //player's Name
var randomNumber = Math.ceil(Math.random()*10); //Random number user Guesses
console.log(randomNumber);
var score = 0; //User's score
if (!userName) { //User's Name
  alert('No it\'s not!');
  userName = prompt('I said, What. Is. Your. Name?');
} else {
  alert('Hello ' + userName + ', welcome to my About Me! My name is Collin Hintzke! And I would love to give you a Quiz, Lets get started!');
  console.log('Their name is ' + userName);
}
//arrays of Questions and Answers
var questionArray = ['What is my favorite color?', 'What is my favorite winter hobby?', 'What is my age?', 'Who is my favorite actor?', 'What is my favorite beatle\'s song?'];
var answerArray = ['purple', 'snowboarding', '23', 'johnny depp', 'hey jude'];

// start first function here
function compareArrays () {
  for(var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]).toLowerCase();
    // while answer < 1 {
    if (answer === answerArray[i]){
      alert('Congrats ' + userName + '! +1 point for you!');
      score ++;
      console.log(userName + ' got question #' + i + ' correct');
    } else {
      alert('Better luck next time ):');
      console.log(userName + ' got Question #' + i + ' incorrect');
    }
  }
//end first function here
}
compareArrays();

// Q6 - Guessing game multiple correct answers, multiple chances
var stateLiving = ['connecticut', 'california', 'florida'];

//start 2nd funciton here
function livingFunction () {
  var chances = 4;
  while(chances > 0){
    if(chances > 1) {
      var stateGuess = prompt('In ' + chances + ' guesses, Can you guess one of the 3 other states besides Washington that I have lived in?').toLowerCase();
    } else {
      stateGuess = prompt( 'In ' + chances + ' guess, Can you guess one of the 3 other states besides Washington that I have lived in?').toLowerCase();
    }
    var isCorrect = false;
    for (var x = 0; x < stateLiving.length; x++){
      if(stateGuess === stateLiving[x]) {
        isCorrect = true;
        break;
      }
    }
    if(isCorrect){
      alert('Yay! +1 point for ' + userName);
      score++;
      break;
    }else{
      alert('Oops. Try again.');
      chances--;
    }
  }
  if (isCorrect === true) {
    console.log(userName + 'got question #6 correct');
  } else {
    console.log(userName + 'got question #6 incorrect');
  }
//ends 2nd function
}
livingFunction();

// Q7 - random number guess

//starting 3rd function
function numberGuess() {
  var chances = 4;
  var randomNumberGuess;
  while(chances > 0) {
    if(chances === 1) {
      randomNumberGuess = parseInt(prompt('You have ' + chances + ' guess left to guess the random number between 1-10 that I am thinking of?'));
    } else {
      randomNumberGuess = parseInt(prompt('You have ' + chances + ' guesses left to guess the random number between 1-10 that I am thinking of?'));
    }
    var isCorrect = false;
    if(randomNumberGuess === randomNumber) {
      isCorrect = true;
      break;
    }
    if (isCorrect) {
      score++;
      alert('Congrats +1 point for you!');
      console.log(userName + 'got question #7 correct');
    } else {
      alert('Better luck next time!');
    }
  }
}
numberGuess();
var totalPossibleScore = questionArray.length + 2;
if(score >=4) {
  alert('You passed with a score of ' + score + ' out of ' + totalPossibleScore + '!');
} else {
  alert('You failed with a score of ' + score + ' out of ' + totalPossibleScore + '!');
}
console.log(userName + '\'s score is ' + score);
//end third function
