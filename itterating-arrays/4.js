// Write a function that calculates the average of the numbers in an array.

let numArray = [100,90,85,95]
let j = 0

for(let i = 0; i < numArray.length; i++){
    j += numArray[i]

}

let result = j / numArray.length

console.log("the numbers are:")
for(let i = 0; i < numArray.length; i++){
    console.log(numArray[i])
}
console.log(`the average is ${result}`)
