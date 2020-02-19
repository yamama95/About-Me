'use strict';
var score =0;
var userName  = function() { prompt('do you know me ? ').toLowerCase();

if (userName === 'yes' || userName === 'y' )
{
  alert('welcome!!');
  score++;
} else if (userName === 'no' || userName === 'n'){
  alert('my name is yamama i am a software developer');
} else {
  alert('please answer yes/y or no/n ');
} };
userName();
// console.log(userName);




var hobby = function () {prompt('Do you know my hobby?').toLowerCase();

if (hobby === 'yes' || hobby === 'y')
{
  alert('coo00ol!!');
  score++;
} else if (hobby === 'no'|| hobby === 'n'){
  alert('my hobby is drawing!');
}else {
  alert('please answer yes/y or no/n ');
}
}; hobby();
//console.log( hobby);

var webSite = function (){ prompt('do you know what is my website about?').toLowerCase();
if (webSite === 'yes'|| webSite === 'y' )
{
  alert('Great!!');
  score++;
} else if (webSite === 'no'|| webSite === 'n' ){
  alert('my website about video games');
}else {
  alert('please answer yes/y or no/n ');
} };
webSite();
//console.log( webSite );


var question = function () { prompt('are you intersted to my website?').toLowerCase();
if (question === 'yes' || question === 'y' )
{
  alert('Great!!');
  score++;
} else if (question === 'no'|| question === 'n' ){
  alert('my website about video games');
}
else {
  alert('please answer yes/y or no/n ');
} };
question();
//console.log( question );



var inqury = function() { prompt('have you visited my website before?').toLowerCase();
if (inqury === 'yes' || inqury === 'y')
{
  alert('Great!!');
  score++;
} else if (inqury === 'no' || inqury === 'n'){
  alert('you are welcome to my website');
}else {
  alert('please answer yes/y or no/n ');
} };
inqury();

//console.log(inqury);

var age = function(){
for(var i=0 ; i <=3 ; i++){
  var age = prompt('guess what my age ?! (my age between 20 and 30)');
  age = Number(age);
  if (age === 24)
  {
    alert('yes thats right!Great!!');
    score++;
    break;
  }

  if (age >20 && age <22){ alert('too low');}
  if (age >=22 && age <24 ){ alert( 'law');}
  if (age <=27 && age >24 ){ alert( 'high');}
  if (age >27 && age <30 ){ alert( 'too high');}
}

var favKind= ['action' , 'comedy' , 'horror' , 'adventure' ,'romance'].toLowerCase();
for( var j =0 ; j <6 ; j++){
  var myFav = prompt ( ' Guess whats my favourite kind of films?');


  for( var x =0 ; x <favKind.length ; x++){

  

    if ( myFav === favKind [x]) {

      j=6;
      x=favKind.length;
      score++;
      alert(' yup!!! you are right');

    }}
  alert('nooo try again :(');}
alert('you got ' + score +' lol');