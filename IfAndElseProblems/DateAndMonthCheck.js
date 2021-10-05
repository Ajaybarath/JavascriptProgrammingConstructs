const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let month;
  let date;

readline.question(`Enter the date `, d => {
    date = d;
    readline.question(`Enter the month in number `, m => {
        month = m;

        if (month == 3 && date >=20) {
            console.log("true")
          }
          else if (month == 6 && date <=20) {
            console.log("true")
          }
          else if (month <= 3 && month <= 6) {
            console.log("true")
          }
          else {
              console.log("False")
          }

          readline.close();

  })
})