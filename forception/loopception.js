// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet.

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const newArr = []

function forception(){
    for( let i = 0; i < people.length ; i++ ){

        newArr.push(people[i])

        for( let j = 0 ; j < alphabet.length; j++){

            newArr.push(alphabet[j])

        }
    }
    console.log(newArr)
}
 forception(people, alphabet)
