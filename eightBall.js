let userName = '';
userName === ''? console.log('Hello!') : console.log(`Hello, ${userName} !`);
let userQuestion ='';
console.log(`${userName} asked : ${userQuestion}`);
let randomNumber =Math.floor(Math.random()*2);
let eigthBall ='';
switch (randomNumber){
  case 0 :
  eigthBall = 'It is certain';
  break
  case 1 :
  eigthBall = 'It is decidedly so';
 
  
};
console.log(randomNumber);
console.log(eigthBall);