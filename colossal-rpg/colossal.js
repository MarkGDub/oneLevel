const readlineSync = require("readline-sync");

// Introduction
let userName = readlineSync.question("What is your name warrior? ")
console.log(userName + ", you are about to enter battle against the Colossal's army as the King's champion.  You will need to fight and defeat the generals of the Colossal's army to help the King's army win the battle!  Do not let your King down..")

// Built enemies and hero
const player = {
    name: userName,
    health: 100,
    inventory: [],
    gameOver: false,
}

const enemies = [
    enemy1 = {
        name: "The Mystic Sphinx",
        health: +Infinity,
        item: "'The Infinity Gauntlet'",
    },

    enemy2 = {
        name: "TheLegend27",
        health: 50,
        item: "'Pocket Lint'",
    },

    enemy3 = {
        name: "General Falcorn",
        health: 30,
        item: "'The Sword of a Thousand Truths'",
    },

] 
const finalBoss = {
    name: "The Colossal",
    health: 100,
    item: "The Crown to the Iron Throne"
}

// Game Start
while (player.health > 0 && finalBoss.health > 0) {
        console.log("--------------------------------------")
        const key = readlineSync.keyIn(player.name + " press 'w' to walk, 'i' to see your inventory, and 'q' to quit game! ", {limit: "wiq"})
        if (key == "w") {
        
        let enemyNumber = randomNumber(1, 3)
        
        if (enemyNumber === 1) {
            
            let index = randomNumber(0, enemies.length -1)
            
            console.log(enemies[index].name + " has appeared!" + " It has " +enemies[index].health + "HP!")
            
            action(index)
            gainItem(index)
            enemyFilter()
            finalBossFight()
            endGameCheck()

        } else {
            console.log("You catch your breath in battle as you search for your next foe!")
            player.health += randomNumber(1, 15)
        }
        }

        if (key === "i") {
            console.log(player.inventory)
        }

        if (key === "q") {
            player.gameOver = true
            console.log("You fled the battlefield, how dishonorable!")
            return
        }
}


// Game Functions

// Random Number Generator
function randomNumber(min, max){
    return Math.floor(((Math.random() * max) + min ))
}

// Action Sequence
function action(index) {
    
    // Mystic Sphinx Encounter
    while (player.health > 0 && enemies[index].health > 0) {
        
        if (enemies[index].name === "The Mystic Sphinx") {
        let riddleAnswer = readlineSync.question("Hello " +player.name+ " as I cannot die, I offer you a different challenge instead... a riddle.  If you can answer this riddle I will let you continue on your quest!  Answer incorrectly and I will kill you.  The riddle is 'What goes up and never comes down? ")
        if (riddleAnswer == "age") {
            
            enemies[index].health = 0
            console.log("You shall pass, and I shall give you this as a reward for your wit. ")
            return

        } else {
            
            console.log("Wrong answer")
            player.health = 0
            return
        }
    }

    // Attack Key Sequence
    const actionKeys = ["attack ", "run "]
    let actionKey = readlineSync.keyInSelect(actionKeys, "Choose an action! ")
    
    let heroDmgOutput = randomNumber(1, 40);
    let enemyDmgOutput = randomNumber(1, 40);

        if (actionKey === 0 ) {
            
            player.health -= enemyDmgOutput
            enemies[index].health -= heroDmgOutput
             console.log("You dealt " + heroDmgOutput + " DMG! " + enemies[index].name + " health is at " + enemies[index].health + "HP!")
            console.log(enemies[index].name + " dealt " + enemyDmgOutput + " DMG , and your health is now at " + player.health + "HP!")
        
        } else if ( actionKey === 1 ) {
            
            let escapeNum = randomNumber(1, 2)
            if (escapeNum === 1) {
            player.health -= enemyDmgOutput
            console.log("You escape, but not before " +enemies[index].name+ " hit you, and now your health is at " +player.health+ "HP.")
            return
            } else {
                console.log("You run in zig zags to escape, but " + enemies[index].name + " followed, you must fight!")
            }
        } 
    }
}

// Enemy Filter Array
function enemyFilter() {
    for ( let i = 0 ; i < enemies.length ; i++ ){
        if ( enemies[i].health <= 0 ) {
            enemies.splice([i], 1)
            console.log("You have " + enemies.length + " enemies left!")
        }
    }
}

// FINAL BOSS FIGHT - THE COLOSSAL
function finalBossFight(){
    if (enemies.length === 0 && player.health > 0) {
        console.log("... BUT WAIT! The ground trembles beneath you, you look up as The Colossal towers over you.  It is time to finish this champion!")
        while (finalBoss.health > 0 && player.health > 0) {
            const actionKeys = ["attack", "counter", "hide"]
            console.log("Your health is at " + player.health + "HP")
            console.log("The Colossal's health is at " +finalBoss.health+ "HP")
            let actionKey = readlineSync.keyInSelect(actionKeys, "Choose an action! ")
            if (actionKey === 0) {
                let playerAttackDmg = randomNumber(30, 40)
                let bossAttackDmg = randomNumber(20,40)

                player.health -= bossAttackDmg
                finalBoss.health -= playerAttackDmg
            } else if (actionKey === 1) {
                let counterChance = randomNumber(1, 2)
                let playerCounterDmg = randomNumber (15, 30)
                let bossCounterDmg = randomNumber (15, 25)
                if (counterChance === 1) {
                    finalBoss.health -= playerCounterDmg
                    console.log("You parried and countered perfectly!")
                } else {
                    player.health -= bossCounterDmg
                    finalBoss.health -= playerCounterDmg
                    console.log("You hit, but your timing was off and you took some damage")
                }
            } else {
                let hideChance = randomNumber(1, 5)
                let bossHideDmg = randomNumber (10, 20)
                if (hideChance <= 3) {
                    player.health += randomNumber(5, 25)
                    console.log("Wow you succeeded at hiding and gained some HP.  The Colossal has sniffed you out though, face your foe!")
                } else {
                    player.health -= bossHideDmg
                    console.log("You failed at hiding and were hit with a boulder!")
                }
            }
        }
    }
}

// Inventory Push
function gainItem(index) {
    if ( enemies[index].health <= 0) {
        console.log("You gained " + enemies[index].item)
        player.inventory.push(enemies[index].item)
    }
}

// endGame
function endGameCheck() {
    
    if (player.health > 0 && finalBoss.health < 0) {
        console.log("Madlad, you've done it!  You beat The Colossal and gained " +finalBoss.item)
        player.inventory.push(finalBoss.item)
        console.log("With this crown the Colossal's land and people are now under your command.  However, will you use it to unite the two kingdoms in peace or turn and conquer? Stay tuned..")
        player.gameOver = true
    } else if (player.health <= 0 && enemies.length > 0 && finalBoss.health > 0) {
        console.log("Nice try hero, but you died and will not be remembered. Game over")
        player.gameOver = true
    } else if (player.health <= 0 & enemies.length == 0 && finalBoss.health <= 0){
        console.log("You sacrificed your life to save your people.  You will be a legend for generations to follow and be known as " +player.name+ " the Great!")
        player.gameOver = true
    }
}
