const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, n => {

    let i = 0;
    while(i <= n) {
        console.log(Math.pow(2, i))
        i++;
    }

    readline.close();
})