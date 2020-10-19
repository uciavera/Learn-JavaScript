const getSleepHours =(day)=>{
    switch (day){
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 5;
      break;
      case 'wednesday':
      return 3;
      break;
      case 'thursday':
      return 2;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 1;
      break;
      case 'sunday':
      return 10;
      break;
    }
  }
  //test
  console.log(getSleepHours('sunday'));
  
  const getActualSleepHours =()=>{
    sleepHours = getSleepHours('monday')+
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
    return sleepHours;
  };
  
  const getIdealSleepHours=()=>{
    const idealHours = 7.5;
    return idealHours * 7;
  };
  //test
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt=()=>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours){
      console.log('perfect!');
    } else if(actualSleepHours > idealSleepHours){
      console.log('too much sleep !!');
    } else {
      console.log('take a rest!!!');
      }
  };
  calculateSleepDebt();