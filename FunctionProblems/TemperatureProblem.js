const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter 1 for degF to defC and 2 for degC to degF :`, value => {

    switch(value) {
        case '1' :
            degFToDegC()
            break;
        case '2':
            degCToDegF()
            break;
    }
})

function degFToDegC() {
    readline.question(`Enter the temperature `, temp => {
       console.log((temp-32)*5/9);
       readline.close()
    })
}

function degCToDegF() {
    readline.question(`Enter the temperature `, temp => {
       console.log((temp * 9/5) + 32);
       readline.close()
    })
}