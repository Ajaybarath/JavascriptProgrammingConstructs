let numbersArr = new Array();

counter = 0;

for (var i=1;i<100;i++) {
    if (i % 11 == 0) {
        numbersArr[counter++] = i
    }
}

console.log(numbersArr)