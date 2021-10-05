const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, start => {
    readline.question(`Enter the number `, end => {

        for (var j = start; j < end; j++) {
            let flag = 0;

            for (var i = 2; i <= j / 2; i++) {
                if (j % i == 0) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
                console.log("Prime " + j)

        }

        readline.close();
    })
})