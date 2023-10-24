// vowel and consonant counter

let word = "just once"
let vowels = 0
let consonant = 0

console.log(...word)

for(let i = 0; i < word.length; i++){
    const char = word[i].toLowerCase()

    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" )
    vowels++
    else{
        consonant++
    }
}

console.log(`vowels: ${vowels}`)
console.log(`consonant: ${consonant}`)
