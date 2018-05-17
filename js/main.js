var userFirstName = prompt("What's your name?");
var userLastName = prompt("What's your last name");
var userAge = prompt(userFirstName + " " + "Please enter your age");
var greeting = alert("Hello " + userFirstName + " " + userLastName + ".");


var monthsAlive = userAge * 12; 
var daysAlive = 365 * userAge;
document.write('Wow You are' + " " + monthsAlive + ' months old' + "," + ' and' + " " + daysAlive + ' days old!');
