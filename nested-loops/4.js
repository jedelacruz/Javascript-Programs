/*

* * *
* * *
* * *

*/


let columns = 3;
let rows = 3;

for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= columns; j++) {
        row += '* ';
    }
    console.log(row);
}
