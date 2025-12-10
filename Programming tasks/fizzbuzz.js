const n = 15;

for(let i = 1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let out = "";

//         if (i % 3 === 0) out += "Fizz";
//         if (i % 5 === 0) out += "Buzz";

//         console.log(out || i);
//     }
// }

// fizzBuzz(15);