var question1 = prompt("Can I swim?");
if (question1.toUpperCase() ==='YES' || question1.toUpperCase() === 'Y') {
	alert('Correct! You never know when you are going to fall into the water.');
} else {
	alert('Incorrect, sorry. That\'s a fundamental skill we ALL should know. No?');
}
var question2 = prompt("Can I fly?");
if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
	alert('That\'s right, I am magic !!!');
} else {
	alert('Understandable mistake, but I just happen to be lucky like that.');
}
var question3 = prompt("Can I dance?")
if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
	alert('Hell yeah I can !!!');
} else {
	alert('Really? Humph. I\'m kind of offended.');
}


console.log("swimming response: " + question1);
console.log("flying response: " + question2);
console.log("dancing response: " + question3),

alert('your answer to "Can I swim?" was ' + question1);
alert('your answer to "Can I fly?" was ' + question2);
alert('your answer to "Can I dance?" was ' + question3);