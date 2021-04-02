// // Write a function that takes an array of numbers and returns the largest (without using Math.max())

// const numbers = [ 2, 3 , 4, 1 ,5 , 4, 6, 32, 200, -5, -1000, 10000, 50]

// function largestNum(){
//     let biggestNum = -Infinity
//     for ( let i = 0; i < numbers.length ; i++) {
//         if (numbers[i] > biggestNum) {
//             biggestNum = numbers[i]
//         }
//     }
//     console.log(biggestNum)
// }

// largestNum()

// // Write a function that takes an array of words and a character and returns each word that has that character present.

// const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!", "@Low", "Tr!fln"]
// const wordsWithCharacter = []

// function searchForLetter(){
//     for ( let i = 0 ; i < lettersWithStrings.length ; i++) {
        
//         for ( let j = 0 ; j < lettersWithStrings[i].length ; j++) {
            
//             if (lettersWithStrings[i][j] === "!") {
                
//                 wordsWithCharacter.push(lettersWithStrings[i])

//             }
//         }
//     }
//     console.log(wordsWithCharacter)
// }

// searchForLetter()

// // Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// function divisible(num1, num2) {
//     let isDivisible = false
//     if (num1 % num2 === 0) {
//         isDivisible = true
//     } else {
//         console.log("Error")
//     }
//     console.log(isDivisible)
// }

// divisible(18, 3)