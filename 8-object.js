let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

//change value
spaceship.color = 'glorious gold';
//add key n value
spaceship.numEngines= 5;
//delete properties
delete spaceship['Secret Mission'];


//method
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
console.log(alienShip.retreat());
console.log(alienShip.takeOff());


//nested object
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  //get firts value of capt fav food
  let capFave =spaceship.crew.captain['favorite foods'][0];
  console.log(capFave);
  //add pessengers nested obj
  spaceship.passengers = [{name: 'Qudsy', status: 'VVIP'}, {name: 'Udin', status: 'VVIP'}];
  //get first pessenger
  let firstPassenger = spaceship.passengers[0];
  console.log(firstPassenger);


//reff func
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  //change value
  let greenEnergy = obj => {
    obj ['Fuel Type']='avocado oil';
  };
  //add key n value
  let remotelyDisable =obj =>{
    obj.disabled = true;
  };
  //show
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);
  

//iterator for in
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
//will show role:name
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};

//will show name: degree
for (let crewMember in spaceship.crew){
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}
