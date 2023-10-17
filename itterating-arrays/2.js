// Write a function that takes an array of numbers as input and returns the largest number in the array.

let numOfArray = [2,5,9,1,10]
let sortedArray = numOfArray.sort()

for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] > sortedArray[i + 1]){
        console.log(`the largest num is ${sortedArray[i]}`)
    }
}

