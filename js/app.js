'use strict';
var score = 0
var userName = prompt('What is your name?');
if (!userName) {
    alert('No it\'s not!')
    userName = prompt('I said, What. Is. Your. Name?')
} else {
    alert('Hello ' + userName + ', welcome to my About Me! My name is Collin Hintzke');
    console.log('Their name is ' + userName);
}

var favColor = prompt('What do you think my favourite color is?');
if (favColor.toLowerCase() === 'grey' , favColor.toLowerCase() === 'purple') {
    alert('Good Job, +1 point for you!')
    console.log (userName + ' guessed my favorite color correctly! I like both grey and purple!')
    score = score + 1
} else {
    alert('Sorry ' + userName + '. You were incorrect, my favorite color is grey and purple!');
    console.log (userName + ' was wrong about my favorite color');
}
var favHobby = prompt('What is my favorite outdoor hobby?');
if (favHobby.toLowerCase() === 'snowboard' , favHobby.toLowerCase() === 'snowboarding') {
    alert('Correct. I absolutely love the snow and snowboarding has always been a passion of mine!')
    console.log(userName + ' guessed my favorite hobby correctly');
    score = score + 1
} else {
    alert('Sorry, but you were incorrect.')
    console.log (userName + 'was incorrect about my favorite hobby.');
} 
var age = prompt('How old do you think I am?')
    if (age.parseInt() === 23) {
        alert('Congrats ' + userName + ' You are spot on!')
        score = score + 1
    }   else {
        alert('Sorry but you are incorrect, I am 23 years old')
    }
var favActor = prompt('Who is my favorite actor?')
if (favActor.toLowerCase() === 'johnny depp'){
    alert('Holy cow ' + userName + ' You are correct, I love all the weird oddball characters John can play!')
    score = score + 1
}   else {
    alert('Sorry but you were incorrect again ):')
}
var favSong = prompt('One last question ' + userName + ', what is my favorite Beatles song?');
if (favSong.toLowerCase() === 'hey jude') {
    alert('Wow you got it correct ' + userName + '! Someone give this person a cookie!');
    score = score + 1
}   else {
    alert('Sorry ' + userName + ', but my favorite song is Hey Jude, not ' + favSong)
    console.log(userName + ' Did not get my favorite Beatles song correctly, but he does like ' + favSong);
}
console.log(userName + '\'s score is ' + Score);