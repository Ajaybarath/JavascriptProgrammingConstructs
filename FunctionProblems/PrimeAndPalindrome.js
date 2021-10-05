const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter the number `, number => {

    if (prime(number) == 1 && palindromes(number) == 1) {
        console.log("the number is prime and palindrome")
    }
    else {
        console.log("the number is not prime and palindrome")
    }
    readline.close()
})


function palindromes(number) {

    var rem, temp, final = 0;

    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }

    if (final == temp) {
        return 1;
    }
    else {
        return 0;
    }

}

function prime(number) {

    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return 0;
        }
    }

    return 1;

}
