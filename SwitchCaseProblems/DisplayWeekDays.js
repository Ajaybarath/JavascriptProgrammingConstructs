const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter a number `, number => {

    switch (number) {
        case '1':
            console.log("Sunday")
            break;
        case '2':
            console.log("Monday")
            break;
        case '3':
            console.log("Tuesday")
            break;
        case '4':
            console.log("Wednesday")
            break;
        case '5':
            console.log("Thursday")
            break;
        case '6':
            console.log("Friday")
            break;
        case '7':
            console.log("Saturday")
            break;
    }
    
    readline.close();
})