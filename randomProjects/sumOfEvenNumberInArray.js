let arrayNum = [2,3,4,6,7]
let sum = 0

for(let i = 0; i < arrayNum.length; i++){
    if (arrayNum[i] % 2 === 0){
        sum += arrayNum[i]
    }
}

console.log(`the total is ${sum}`)
