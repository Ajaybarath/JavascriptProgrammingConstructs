const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter a number `, number => {

    let feetToInches = number * 12;

    let feetToMeter = number * 0.3048;

    let inchToFeet = feetToInches * 0.084;

    let meterToFeet = feetToMeter * 3.28084;

    console.log("feetToInches : " + feetToInches);
    console.log("feetToMeter : " + feetToMeter);
    console.log("inchToFeet : " + inchToFeet);
    console.log("meterToFeet : " + meterToFeet);
    
    readline.close()
})