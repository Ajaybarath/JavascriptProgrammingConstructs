const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, n => {

    for (var i=1; i <= n; i++) {
        console.log(Math.pow(2, i))
    }

    readline.close();
})