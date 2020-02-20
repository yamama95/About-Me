'use strict';
var score =0;
function M1(){


  var userName  = prompt('do you know me ? ').toLowerCase();

  if (userName === 'yes' || userName === 'y' )
  {
    alert('welcome!!');
    score++;
  } else if (userName === 'no' || userName === 'n'){
    alert('my name is yamama i am a software developer');
  } else {
    alert('please answer yes/y or no/n ');
  }
}
M1();
// console.log(userName);



function H1(){
  var hobby = prompt('Do you know my hobby?').toLowerCase();

  if (hobby === 'yes' || hobby === 'y')
  {
    alert('coo00ol!!');
    score++;
  } else if (hobby === 'no'|| hobby === 'n'){
    alert('my hobby is drawing!');
  }else {
    alert('please answer yes/y or no/n ');
  }}
H1();

//console.log( hobby);
function W1(){
  var webSite =  prompt('do you know what is my website about?').toLowerCase();
  if (webSite === 'yes'|| webSite === 'y' )
  {
    alert('Great!!');
    score++;
  } else if (webSite === 'no'|| webSite === 'n' ){
    alert('my website about video games');
  }else {
    alert('please answer yes/y or no/n ');
  }
}
W1();
//console.log( webSite );

function Q1(){
  var question =  prompt('are you intersted to my website?').toLowerCase();
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
}
Q1();
//console.log( question );


function I1(){
  var inqury =  prompt('have you visited my website before?').toLowerCase();
  if (inqury === 'yes' || inqury === 'y')
  {
    alert('Great!!');
    score++;
  } else if (inqury === 'no' || inqury === 'n'){
    alert('you are welcome to my website');
  }else {
    alert('please answer yes/y or no/n ');
  }
}
I1();


//console.log(inqury);

function A1(){
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
  }}
A1();

function F1(){
  var favKind= ['action' , 'comedy' , 'horror' , 'adventure' ,'romance'];
  for( var j =0 ; j <6 ; j++){
    var myFav = prompt ( ' Guess whats my favourite kind of films?');
    var warn='noo!!try again :(';
    for( var x =0 ; x <favKind.length ; x++){
      if ( myFav === favKind [x]) {

        j=6;
        x=favKind.length;

        warn='yup you got it';
        score++;
      }}

    alert(warn);}
  alert('you got ' + score +' lol');
}
F1();