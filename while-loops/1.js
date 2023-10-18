let maxNumber = parseInt(prompt("Enter the max number: "))
let randomNumber = Math.floor(Math.random() * maxNumber) + 1
let guessNumber = 1

while(true){
    let guess = parseInt(prompt("Guess the number: "))
    if(guess == randomNumber){
        console.log(`Congrats! It took you ${guessNumber} tries.`)
        break
    }
    else{
        if(guess > randomNumber){
            console.log("Too high, Guess lower")
        }
        else{
            console.log("Too low, Guess higher")
        }
        guessNumber += 1
    }
}

