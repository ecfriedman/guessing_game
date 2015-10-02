var totals = 0;
var quests = ['Can I swim?', 'Can I fly?', 'Can I dance?'];
var userInput = ['YES', 'Y'];

function q1() {
  var question1 = prompt(quests[0]);
  if (question1.toUpperCase() === userInput[0] || question1.toUpperCase() === userInput[1]) {
    one.innerHTML = 'Correct! You never know when you are going to fall into the water.';
    pic1.innerHTML = '<img src="img/Swimming-baby1.jpg" width="200"/>';
    totals++;
  } else {
    one.innerHTML = 'Incorrect, sorry. That\'s a fundamental skill we ALL should know. No?';
  }
  console.log("swimming response: " + question1);
}
function q2 () {
  var question2 = prompt(quests[1]);
  if (question2.toUpperCase() === userInput[0] || question2.toUpperCase() === userInput[1]) {
   two.innerHTML = ' That\'s right, I am magic !!!';
   pic2.innerHTML = '<img src = "img/flying-dream.jpg" width="200"/>';
    totals++;
  } else {
    two.innerHTML = 'Understandable mistake, but I just happen to be lucky like that.';
  }
  console.log("flying response: " + question2);
}
function q3 () {
    var question3 = prompt(quests[2]);
  if (question3.toUpperCase() === userInput[0]  || question3.toUpperCase() === userInput[1]) {
    three.innerHTML = 'Hell yeah I can !!!';
    pic3.innerHTML = '<img src = "img/dancing.jpg" width="200"/>';
    totals++;
  } else {
    three.innerHTML = 'Really? Humph. I\'m kind of offended.';
  }
  console.log("dancing response: " + question3);
}

q1();
q2();
q3();


// console.log("swimming response: " + question1);
// console.log("flying response: " + question2);
// console.log("dancing response: " + question3),

// not used anymore
// alert('your answer to "Can I swim?" was ' + question1);
// alert('your answer to "Can I fly?" was ' + question2);
// alert('your answer to "Can I dance?" was ' + question3);
answers.innerHTML = 'You got ' + totals + ' correct! Thanks for playing.';
