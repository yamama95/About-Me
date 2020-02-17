'use strict';
var userName = prompt('do you know me ? ').toLowerCase();

if (userName === 'yes')
{
  alert('welcome!!');
} else if (userName === 'no'){
  alert('my name is yamama i am a software developer');
} else if(userName !== 'yes' || userName !== 'no'){
  alert('please answer yes or no');
}
console.log(userName);




var hobby = prompt('Do you know my hobby?');

if (hobby === 'yes')
{
  alert('coo00ol!!');
} else if (hobby === 'no'){
  alert('my hobby is drawing!');
}else if(hobby !== 'yes' || hobby !== 'no'){
  alert('please answer yes or no');
}

console.log( hobby);

var webSite = prompt('do you know what is my website about?');
if (webSite === 'yes')
{
  alert('Great!!');
} else if (webSite === 'no'){
  alert('my website about video games');
}else if(webSite !== 'yes' || webSite !== 'no') {
  alert('please answer yes or no');
}
console.log( webSite );


var question = prompt('are you intersted to my website?');
if (question === 'yes')
{
  alert('Great!!');
} else if (question === 'no'){
  alert('my website about video games');
}
else if(question !== 'yes' || question !== 'no'){
  alert ( 'please answer yes or no');
}
console.log( question );



var inqury = prompt('have you visited my website before?');
if (inqury === 'yes')
{
  alert('Great!!');
} else if (inqury === 'no'){
  alert('you are welcome to my website');
}else if (inqury !== 'yes' || inqury !== 'no'){
  alert ('please answer yes or no');
}

console.log(inqury);
