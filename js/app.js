'use strict';
var userName = prompt('What is your name?'); //player's Name
var randomNumber = Math.round(Math.random()*10); //Random number user Guesses
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
for(var i = 0; i < questionArray.length; i++) {
  var answer = prompt(questionArray[i]).toLowerCase();
  if (answer === answerArray[i]){
    alert('Congrats ' + userName + '! +1 point for you!');
    score ++;
    console.log('They got question #' + i + ' correct');
  } else {
    alert('Better luck next time ):');
    console.log('They got Question #' + i + ' incorrect');
  }
}
//Guessing game multiple correct answers, multiple chances
var stateLiving = ['connecticut', 'california', 'florida'];
var chances = 5;
while(chances > 0){
  var stateGuess = prompt('In ' + chances + ' guesses, Can you guess one of the 3 other states besides Washington that I have lived in?').toLowerCase();
  var isCorrect = false;
  for (var x = 0; x < stateLiving.length; x++){
    if(stateGuess === stateLiving[x]) {
      isCorrect = true;
      break;
    }
  }
  if(isCorrect){
    alert('Yay!');
    score++;
    break;
  }else{
    alert('Oops. Try again.');
    chances--;
  }
}
//random number guess
var randomNumberGuess = prompt('What number between 1-10 am I thinking of?');
if(randomNumberGuess === randomNumber) {
  alert('Wow, how\'d you know that!!!');
  score++;
} else {
  alert('Ha, nice try guy! The number I was thinking of was ' + randomNumber);
}
var totalPossibleScore = questionArray.length + 2;
if(score >=4) {
  alert('You passed with a score of ' + score + ' out of ' + totalPossibleScore + '!');
} else {
  alert('You failed with a score of ' + score + ' out of ' + totalPossibleScore + '!');
}
console.log(userName + '\'s score is ' + score);