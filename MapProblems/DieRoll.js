let dieMap = new Map();

let max = 0;
let min = 0;
let minValue = 11;


while (limitCheck() == 0) {
    let roll = Math.floor(Math.random()*10) % 5 + 1;

    if (!dieMap.has(roll)) {
        dieMap.set(roll, 1)
    }
    else {
        let val = dieMap.get(roll);
        dieMap.set(roll, ++val);    
    }
    
}


for (let [key, value] of dieMap) {
    if (value < minValue) {
        min = key;
        minValue = value;
    }
}

console.log("min roll : " + min + " max roll : " + max)

function limitCheck() {
    for (let [key, value] of dieMap) {
        if (value == 10) {
            max = key;
            return 1;
        }
    }
    return 0;
}