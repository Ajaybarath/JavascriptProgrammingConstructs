const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, a => {
    readline.question(`Enter the number `, b => {
        readline.question(`Enter the number `, c => {

            let min;
            let max;

            let operation1 = a + b * c;

            let operation2 = a % b + c;

            let operation3 = c + a / b;

            let operation4 = a * b + c;

            if (operation1 > operation2 && operation1 > operation3 && operation1 > operation4) {
                max = operation1;
            }
            else if (operation1 < operation2 && operation1 < operation3 && operation1 < operation4) {
                min = operation1
            }
            else if (operation2 > operation1 && operation2 > operation3 && operation2 > operation4) {
                max = operation2;
            }
            else if (operation2 < operation1 && operation2 < operation3 && operation2 < operation4) {
                min = operation2;
            }
            if (operation3 > operation1 && operation3 > operation2 && operation3 > operation4) {
                max = operation3;
            }
            else if (operation3 < operation1 && operation3 < operation2 && operation3 < operation4) {
                min = operation3;
            }
            if (operation4 > operation1 && operation4 > operation3 && operation4 > operation2) {
                max = operation4;
            }
            else if (operation4 < operation2 && operation4 < operation3 && operation4 < operation1) {
                min = operation4;
            }

            console.log("Max : " + max + " Min : " + min);

            readline.close()
        })
    })
})
