// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number. 3 6 9 12 15 18 21 24 27 30

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


const fizzBuzzArr = []

for (let i = 1 ; i <= 100 ; i++ ) {
    if ( [i] % 3 === 0 && [i] % 5 === 0 ) {
        console.log("FizzBuzz")
        // [i] = "fizzbuzz"
        fizzBuzzArr.push("FizzBuzz")
    } else if ([i] % 3 === 0){
        console.log("Fizz")
        // [i] = "fizz"
        fizzBuzzArr.push("Fizz")
    } else if ( [i] % 5 === 0) {
        console.log("Buzz")
        // [i] = "buzz"
        fizzBuzzArr.push("Buzz")
    } else {
        console.log([i])
    }
} 
console.log(fizzBuzzArr)

let fizz = 0
fizz.printFizzbuzzform
let buzz = 0
let fizzbuzz = 0

function count() {
    for ( var i = 0 ; i < fizzBuzzArr.length ; i++ )
    
    if ( fizzBuzzArr[i] === "Fizz" ) {
        fizz++
    } else if ( fizzBuzzArr[i] === "Buzz" ) {
        buzz++
    } else if ( fizzBuzzArr[i] === "FizzBuzz") {
        fizzbuzz++
    }
    console.log("Fizz was called " +fizz+ " times!" , "Buzz was called " +buzz+ " times!" , "FizzBuzz was called " +fizzbuzz+ " times!")
    
}
count()

function Fizzbuzz(fizz, buzz, fizzbuzz){
    this.fizz = fizz,
    this.buzz = buzz,
    this.fizzbuzz = fizzbuzz
}