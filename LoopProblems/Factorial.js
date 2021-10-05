const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, number => {
   
        let fact = 1;
        for (var j = 1; j <= number; j++) {
            fact *= j;
        }

        console.log(fact)

        readline.close();
})