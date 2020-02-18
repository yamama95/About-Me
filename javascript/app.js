'use strict';
var score =0;
var userName = prompt('do you know me ? ').toLowerCase();

if (userName === 'yes' || userName === 'y' )
{
  alert('welcome!!');
  score++;
} else if (userName === 'no' || userName === 'n'){
  alert('my name is yamama i am a software developer');
} else {
  alert('please answer yes/y or no/n ');
}
// console.log(userName);




var hobby = prompt('Do you know my hobby?').toLowerCase();

if (hobby === 'yes' || hobby === 'y')
{
  alert('coo00ol!!');
  score++;
} else if (hobby === 'no'|| hobby === 'n'){
  alert('my hobby is drawing!');
}else {
  alert('please answer yes/y or no/n ');
}

//console.log( hobby);

var webSite = prompt('do you know what is my website about?').toLowerCase();
if (webSite === 'yes'|| webSite === 'y' )
{
  alert('Great!!');
  score++;
} else if (webSite === 'no'|| webSite === 'n' ){
  alert('my website about video games');
}else {
  alert('please answer yes/y or no/n ');
}
//console.log( webSite );


var question = prompt('are you intersted to my website?').toLowerCase();
if (question === 'yes' || question === 'y' )
{
  alert('Great!!');
  score++;
} else if (question === 'no'|| question === 'n' ){
  alert('my website about video games');
}
else {
  alert('please answer yes/y or no/n ');
}
//console.log( question );



var inqury = prompt('have you visited my website before?').toLowerCase();
if (inqury === 'yes' || inqury === 'y')
{
  alert('Great!!');
  score++;
} else if (inqury === 'no' || inqury === 'n'){
  alert('you are welcome to my website');
}else {
  alert('please answer yes/y or no/n ');
}

//console.log(inqury);


for(var i=0 ; i <=3 ; i++){
  var age = prompt('guess what my age ?!');
  age = Number(age);
  if (age === 25 )
  {
    alert('yes thats right!Great!!');
    score++;
    break;
  }
  if (age <=20){ alert('too low');}
  if (age >=30 ){ alert( 'too high');}
  if (age <29 && age >25 ){ alert( 'high');}
  if (age >21 && age <25 ){ alert( 'law');}
}

var favKind= ['action' , 'comedy' , 'horror' , 'adventure' ,'romance'];
var myFav = prompt ( ' Guess whats my favourite kind of films?');
var attempts = 0;
for( var j =0 ; j <=5 ; j++) {
  for( var x =0 ; x <6 ; x++){
    if ( myFav === favKind [x]) {
      alert(' yup!!! you are right');
      score=score+1;

    } else {
      attempts= attempts+1;
      console.log( attempts,'score' ,score);
    }

  }
  if ( attempts === 6) {
    alert('try again');
    myFav = prompt ( ' Guess whats my favourite kind of films?');
    attempts = 0; }

  else {
    break;
  }}
document.write(score);
document.write(favKind);
