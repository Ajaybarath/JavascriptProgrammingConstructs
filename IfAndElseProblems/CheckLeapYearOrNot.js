const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the year `, year => {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("It is a leap year !")
    }
    else {
        console.log("It is not a leap year !")
    }

    readline.close();
})
