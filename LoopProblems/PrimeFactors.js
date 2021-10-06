const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let primeFactorArr = new Array();
let counter = 0;

readline.question(`Enter the number `, number => {
   
    let fact = 1;
    for (var j = 1; j <= number; j++) {
        fact *= j;

        let flag = 0;

        for (var i = 2; i <= j / 2; i++) {
            if (j % i == 0) {
                flag = 1;
                break;
            }
        }

        if (flag == 0){
            console.log("Prime " + j)
            primeFactorArr[counter++] = j;
        }
    }

    console.log(fact)

    console.log(primeFactorArr)

    readline.close();
})
