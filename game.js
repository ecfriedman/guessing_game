var totals = 0;

function q1() {
  var question1 = prompt("Can I swim?");
  if (question1.toUpperCase() ==='YES' || question1.toUpperCase() === 'Y') {
    one.innerHTML = 'Correct! You never know when you are going to fall into the water.';
    totals++;
  } else {
    one.innerHTML = 'Incorrect, sorry. That\'s a fundamental skill we ALL should know. No?';
  }
  console.log("swimming response: " + question1);
}
function q2 () {
  var question2 = prompt("Can I fly?");
  if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
   two.innerHTML = ' That\'s right, I am magic !!!';
    totals++;
  } else {
    two.innerHTML = 'Understandable mistake, but I just happen to be lucky like that.';
  }
  console.log("flying response: " + question2);
}
function q3 () {
    var question3 = prompt("Can I dance?")
  if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
    three.innerHTML = 'Hell yeah I can !!!';
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
