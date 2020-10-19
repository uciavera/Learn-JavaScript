let raceNumber = Math.floor(Math.random() * 1000);
//change age and registered early 
const registeredEarly =false;
let runnerAge = 20;


if (runnerAge > 18){
  raceNumber += 1000;
};
console.log(runnerAge);
console.log(registeredEarly);
console.log(raceNumber);
if (runnerAge > 18){
  if(registeredEarly === true){
    console.log(`you'll race at 9.30 am`)
  } else if(registeredEarly === false){console.log(`you'll race att 11.00 am`)};
} else if(runnerAge === 18){
  console.log('go to registration desk');
} else {console.log('Youth registrants run at 12:30 pm (regardless of registration)')};