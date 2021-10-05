let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let num3 = Math.floor(Math.random() * 1000);
let num4 = Math.floor(Math.random() * 1000);
let num5 = Math.floor(Math.random() * 1000);

console.log("Num1: " + num1 + " Num2: " + num2 + " Num3: " + num3 + " Num4: " + num4 + " Num5: " + num5)

let min = num1;
let max = num1;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    max = num1;
}
else if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    min = num1;
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    max = num2;
}
else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    min = num2;
}
if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    max = num3;
}
else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
    min = num3;
}
if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
    max = num4;
}
else if (num4 < num2 && num4 < num3 && num4 < num1 && num4 < num5) {
    min = num4;
}
if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1) {
    max = num5;
}
else if (num5 < num2 && num5 < num3 && num5 < num4 && num5 < num1) {
    min = num5;
}

console.log("Max : " + max + " Min : " + min);
