// WELCOME TO MY ESCAPE ROOM

const readline = require("readline-sync");

var player = {
    name: playerName,
    isAlive: true,
    hasKey: false,
};

var playerName = readline.question("Oh you're finally awake, what is your name? ");
console.log(playerName + ",", "let's play a game...");

start();

function iteration(){
    const action = readline.question("Press \"f\" to find the key \"o\" to try and open the door and \"h\" to stick your hand a hole, what action do you choose?  Wait, did I leave the door unlocked? ");

    while (player.isAlive == true) {
        if (action === "h") {
            player.isAlive = false;
            console.log("The hole opens and water floods in");
            endGame();
        } else if (action === "o" && player.hasKey === false) {
            console.log("The door wont open, but there is a key dangling in the hole in the wall ");
            return start();
        } else if (action === "o" && player.hasKey === true) {
            console.log("The door opens, and freedom surrounds you");
            return endGame();
        } else if (action === "f") {
            player.hasKey = true
            console.log("Wow, you found the key!  Get out of here! ");
            return start();
        } else {
            console.log("You stumbled and hit your head on something hard, and you pass out...");
            return startOver();
        };
    };
};

// Functions
function start() {
    iteration();
};

function startOver(){
    console.log("Rise and shine, you're still stuck, but you slept the rest of yesterday.  I took the liberty of going through your pockets.");
    player.hasKey = false;
    iteration();
};

function endGame() {
    if (player.isAlive && player.hasKey === true) {
        console.log("CONGRATULATIONS");
        endGamePrompt();
    } else if (player.isAlive === false) {
        console.log("You're dead");
        endGamePrompt();
    };
};

function endGamePrompt() {
    var again = readline.question("Would you like to play again? y/n ")
    if (again === "y") {
            player.isAlive = true;
            player.hasKey = false;
            start();
    } else if (again ==="n") {
            console.log("Thanks for playing, till next time!");
    } else {
        console.log("Sorry the character you entered was not valid");
        endPrompt();
    };
};