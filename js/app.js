'use strict'
// welcoming message
let userName = prompt('please enter our name');
alert('Welcome ' + userName + ' to my site');


// 5 yes or no qustions
let q1 = prompt('do you think i like summer ?');

console.log(q1);

q1 = q1.toLowerCase(); 
switch(q1){
case 'yes':
case 'y':
  alert('Yes actually i do');
  break;
case 'no':
case 'n':
  alert('No i do like summer');
  break;
default:
  alert('please answer with yes or no');
}

let q2 = prompt('do you think i like Movies ?');

console.log(q2);

q2 = q2.toLowerCase(); 
switch(q2){
case 'yes':
case 'y':
  alert('Thats Correct');
  break;
case 'no':
case 'n':
  alert('No i do like Movies');
  break;
default:
  alert('please answer with yes or no');
}

let q3 = prompt('do you find my site intersting ?');

console.log(q3);

q3 = q3.toLowerCase(); 
switch(q3){
case 'yes':
case 'y':
  alert('Nice to hear that');
  break;
case 'no':
case 'n':
  alert('hope you will like it');
  break;
default:
  alert('please answer with yes or no');
}

let q4 = prompt('do you think i like food ?');

console.log(q4);

q4 = q4.toLowerCase(); 
switch(q4){
case 'yes':
case 'y':
  alert('Sure yes :)');
  break;
case 'no':
case 'n':
  alert('No i do like it');
  break;
default:
  alert('please answer with yes or no');
}

let q5 = prompt('do you think i like winter ?');

console.log(q5);

q5 = q5.toLowerCase(); 
switch(q5){
case 'yes':
case 'y':
  alert('No i do not');
  break;
case 'no':
case 'n':
  alert('Thats right :)');
  break;
default:
  alert('please answer with yes or no');
}

document.write('Have a nice Day :) ' + userName)

