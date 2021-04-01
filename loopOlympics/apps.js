// // Write a for loop that prints to the console the numbers 0 through 9.

// for (let i = 0 ; i <= 9 ; i++ ) {
//     console.log([i])
// }

// // Write a for loop that prints to the console 9 through 0.

// for (let i = 9 ; i >= 0; i-- ) {
//     console.log([i])
// }

// // Write a for loop that prints these fruits to the console.

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for ( let i = 0 ; i < fruit.length ; i++ ) {
//     console.log(fruit[i])
// }


// // Write a for loop that will push the numbers 0 through 9 to an array.

// const numbersArr = []

// for ( let i = 0 ; i <= 9 ; i++ ) {
//     numbersArr.push([i])
//     console.log(numbersArr)
// }

// // Write a for loop that prints to the console only even numbers 0 through 100.

// for ( let i = 0 ; i <= 100 ; i++ ) {
//     if ([i] % 2 === 0) {
//         console.log([i])
//     }
// }

// // Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for ( let i = 0 ; i < fruit.length ; i++ ) {
//     if ([i] % 2 === 0){
//         console.log(fruit[i])
//     }
// }


// const peopleArray = [
//     {
//         name: "Harrison Ford",
//         occupation: "Actor"
//     },
//     {
//         name: "Justin Bieber",
//         occupation: "Singer"
//     },
//     {
//         name: "Vladimir Putin",
//         occupation: "Politician"
//     },
//     {
//         name: "Oprah",
//         occupation: "Entertainer"
//     }
// ]

// // Silver 1) Write a loop that will print out all the names of the people of the people array

//   for (let i = 0 ; i < peopleArray.length ; i++ ) {
    //       console.log(peopleArray[i].name)
    //   }
    
// // Silver 2) Write a loop that pushes the names into a names array, and theoccupations into an occupations array.
    
// const names = []
// const occupations = []

// for (let i = 0; i < peopleArray.length ; i++ ) {
    //     names.push(peopleArray[i].name)
    //     occupations.push(peopleArray[i].occupation)
    //     console.log(names)
    //     console.log(occupations)
    // }
        
// Silver 3) Write a loop that pushes every other name to an array startinwith the first person, in this case "Harrison Ford", and every otheoccupation to another array starting with, in this case, "Singer".
        

// const evenNames = []
// const oddOccupations = []

// for ( let i = 0 ; i < peopleArray.length ; i++) {
//     if ([i] % 2 === 0){
//     evenNames.push(peopleArray[i].name)
//     console.log(evenNames)
//     } else if ([i] % 2 === 1) {
//         oddOccupations.push(peopleArray[i].occupation)
//         console.log(oddOccupations)
//     }
// }

// Gold 1) Create an array that mimics a grid like the following using nested for loops:

const gridArr = []
const firstArr = []
const secondArr = []
const thirdArr = []

for ( let i = 0 ; i < 3 ; i++) {
    firstArr.push([0])
    secondArr.push([0])
    thirdArr.push([0])
    gridArr.push(firstArr, secondArr, thirdArr)
    console.log(gridArr)
}