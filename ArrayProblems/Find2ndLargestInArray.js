let randomNumbers = new Array();

for (var i = 0; i < 10; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 1000)
    console.log(randomNumbers[i])
}

let max1 = 0;
let max2 = 0;
let min1 = 999;
let min2 = 999;

for (var i = 0; i < 10; i++) {

    if (randomNumbers[i] > max1) {
        max2 = max1
        max1 = randomNumbers[i]
    }
    else if (randomNumbers[i] < max1 && randomNumbers[i] > max2) {
        max2 = randomNumbers[i]
    }
    if (randomNumbers[i] < min1) {
        min2 = min1
        min1 = randomNumbers[i]
    }
    else if (randomNumbers[i] > min1 && randomNumbers[i] < min2) {
        min2 = randomNumbers[i]
    }
}

console.log("2nd min : " + min2 + " 2nd max : " + max2)

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        
        if (randomNumbers[j] > randomNumbers[j+1]) {
            let temp = randomNumbers[j];
            randomNumbers[j] = randomNumbers[j+1]
            randomNumbers[j+1] = temp
        }
    }
}

console.log("2nd min : " + randomNumbers[1] + " 2nd max : " + randomNumbers[8])


