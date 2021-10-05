const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter a number `, number => {

    if (number == 1) {
        console.log("Unit")
    }
    else if (number == 10) {
        console.log("Tens")
    }
    else if (number == 100) {
        console.log("Hundreds")
    }
    else if (number == 1000) {
        console.log("Thousand")
    }
    else if (number == 10000) {
        console.log("Ten Thousand")
    }
    
    readline.close();
})