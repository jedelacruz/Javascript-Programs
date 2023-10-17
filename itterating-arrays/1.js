// Write a function that takes an array of numbers as an argument and returns the sum of all the elements in the array.

arrayNum = [2,4,5,9]
let sumOfNum = 0
for(let i = 0; i < arrayNum.length; i++){
    console.log(arrayNum[i])
    sumOfNum += arrayNum[i]
}

console.log(`the total is ${sumOfNum}`)
