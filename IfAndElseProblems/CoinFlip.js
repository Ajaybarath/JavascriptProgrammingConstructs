let head  = 0;
let tail = 0;

while (head != 11 && tail != 11) {
    let coin= Math.floor(Math.random() * 10) % 2;

    if (coin == 0) {
        console.log("It is a tail")
        tail++;
    }
    else {
        console.log("It is a head")
        head++;
    }
}

if (head == 11) {
    console.log("Head won")
}
else {
    console.log("Tail won")
}

