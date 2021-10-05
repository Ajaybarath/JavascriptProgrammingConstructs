const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter a number `, number => {
    
    let hormonic = 0;

    for (var i=1; i <= number; i++) {
        hormonic += 1/i;
    }

    console.log(hormonic)

    readline.close()
})