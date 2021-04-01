// Problem 1 - Get 

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

function count() {
  let count = 0
  for ( let i = 0 ; i < officeItems.length ; i++ ){
    if(officeItems[i] === "computer"){
      count++
    }
  }
  console.log(count)
}

count()

// Problem 2 - 18 or older?

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for ( let i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++ ) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
      }
  }

// Light on or off?
const lightArr = [1, 1, 1, 1, 3]

function addSum(){
    let sum = 0;
    for (let i = 0 ; i < lightArr.length ; i++ ){
        sum += lightArr[i];
    }
    console.log(sum);
}

addSum()
