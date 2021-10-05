const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter a number `, number => {

    switch (number) {
        case '1':
            console.log("Unit")
            break;
        case '10':
            console.log("Tens")
            break;
        case '100':
            console.log("Hundreds")
            break;
        case '1000':
            console.log("Thousand")
            break;
        case '10000':
            console.log("Ten Thousand")
            break;
    }
    
    readline.close();
})