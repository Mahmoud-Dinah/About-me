'use strict'
// welcoming message
let userName = prompt('please enter our name');
alert('Welcome ' + userName + ' to my site');


// // 5 yes or no qustions

let score = 0;
let q1 = prompt('do you think i like summer ?');

console.log(q1);

q1 = q1.toLowerCase(); 
switch(q1){
case 'yes':
case 'y':
  alert('Yes actually i do');
  score++;
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
  score++;
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
  score++;
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
  score++;
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
  score++;
  break;
default:
  alert('please answer with yes or no');
}

document.write('Have a nice Day :) ' + userName)

let q6 = prompt('please choose a number from 0-10');
q6 = parseInt(q6);
console.log(typeof q6);

//  6th Q

for(let i = 0 ; i<=3; i++){
  if(q6 == 5){
    alert('thats correct')
    score++;
    break;
  } else if (q6 <= 4){
     alert('too low');
     q6=prompt('please try again');
   }else if (q6 >= 6){
     alert('too high')
     q6=prompt('please try again');
   }
   
  }
alert('the correct answer is 5');

// 7th Q

let q7 = prompt('Can you guess my fav. support ?')

let sport = ['basketball','football','tenes','shooting','swimming','racing','walking'];

for(let i = 0 ; i<=5; i++){
if (q7 == sport [0]){
alert('thats correct')
score++;
break;
}else if ( q7 == sport [2]){
  alert('thats correct')
  score++;
  break;
}else if ( q7 == sport [3]){
  alert('thats correct')
  score++;
  break;
}else{
  q7=prompt('please try again');}
}

alert('The correct answers is : ' + sport [0] + ' and ' + sport [2] + ' and ' + sport [3] )

alert('Your final score is:  '+ score);


