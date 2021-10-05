const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Think of a number 1 to 100")

let st = 0;
let end = 100;
let mid = (st + end) /2;

while(true) {
    console.log(mid)

    readline.question(`If number is less type NO if the number is greater type YES `, number => {
        if (number == 'NO') {
            end = mid;
            mid = (st + end) /2;
        }
        else if (number == 'YES') {
            st = mid;
            mid = (st + end) /2;
        }
        else if (st == mid || end == mid){
            return;
        }
        readline.close()
    })
}
