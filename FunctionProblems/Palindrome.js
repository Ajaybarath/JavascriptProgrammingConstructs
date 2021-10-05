const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

palindromes()

function palindromes() {

    readline.question(`Enter a number :`, number => {

        const len = number.length;

        for (let i = 0; i < len / 2; i++) {

            if (number[i] !== number[len - 1 - i]) {
                console.log('It is not a palindrome' + number[i]);
                readline.close()
                return;
            }
        }

        console.log('It is a palindrome');

        readline.close()

    })
}

