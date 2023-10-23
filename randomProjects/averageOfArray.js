let array1 = [2,54,3,13]
let num = 0

for(let i = 0; i < array1.length; i++){
    num += array1[i]
}

let result = num / array1.length

console.log(`the average is ${result}`)
