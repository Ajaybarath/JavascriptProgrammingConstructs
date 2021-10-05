let money  = 100;

while (money > 0 && money <= 200) {
    let won= Math.floor(Math.random() * 10) % 2;

    if (won == 0) {
        money--;
    }
    else {
       money++;
    }
}

console.log("Money at the end of the game : " + money)