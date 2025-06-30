const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log(`Hello ${name} welcome to our game!`)

const shouldWePlay = prompt("Do you want to play? (y/n)")
if (shouldWePlay.toLowerCase() === "y") {

//game logic
const leftOrRight = prompt("You enter a maze, do you want to go left or right?")
if (leftOrRight === "left") {
    console.log("You go left and see a bridge...")
    const cross = prompt("Do you want to cross the bridge? (y/n)")
    if (cross === "y") {
        console.log("You cross the bridge but fall into a river and drown. Game over!")
    } else {
        console.log(" Great choice.....You win!")
    } 
} else {
    console.log("you go right and fall off a cliff. Game over!")
} 
} else if (shouldWePlay.toLowerCase() === "n") {
    console.log("okay we will not play!")
}
else {
    console.log("Invalid")
}