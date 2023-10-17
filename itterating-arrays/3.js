// Write a function that takes an array of numbers and a boolean parameter (true for odd, false for even). The function should return a new array containing only the odd or even numbers, based on the boolean parameter.

numbers = [2,1,4,7,8,11]
evenNum = []
odddNum = []

for(let i = 0; i < numbers.length; i++){
    console.log("The numbers are: " + numbers[i]);
    if (numbers[i] % 2 == 0){
        evenNum.push(numbers[i])
    }
    else{
        odddNum.push(numbers[i])
    }
}

console.log(`the even numbers are ${evenNum}`)
console.log(`the odd numbers are ${odddNum}`)
