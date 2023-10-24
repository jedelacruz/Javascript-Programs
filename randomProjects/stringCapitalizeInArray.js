/*

String Capitalization

Question: Write a function that capitalizes the first letter of each word in a given string.
Clue: You can split the string into words and capitalize the first letter of each word.

*/

let array = ["je", "dela", "cruz"]
let word = ""
let capitalArray = []

for(let i = 0; i <array.length; i++){
    word += array[i].charAt(0).toUpperCase() + array[i].slice(1)
    capitalArray.push(word)
    word = ""
}

console.log(array)
console.log(capitalArray)
