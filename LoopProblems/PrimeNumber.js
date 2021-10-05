const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, number => {

    let flag = 0;

    for (var i=2; i <= number/2; i++) {
        if(number % i == 0) {
            flag = 1;
            break;
        }
    }

    if (flag == 0) 
        console.log("Prime")
    else 
        console.log("Not a Prime number")

    readline.close();
})