let birthMap = new Array();

for (var i = 0; i < 50; i++) {
    let month = Math.floor(Math.random() * 100) % 12 + 1
    birthMap[i] = month
}

console.log(birthMap)

let monthMap = new Map();

let counter = 1;

let temp = ""

for (var i = 1; i <= 12; i++) {
    monthMap.set(i, temp)
}

monthMap = birthMap.map(monthCheck);

console.log(monthMap)

function monthCheck(month) {

    if (monthMap.has(month)) {
        let val = []
        val = monthMap.get(month);
        val = val + " " + counter++
        return monthMap.set(month, val);
    } 
}