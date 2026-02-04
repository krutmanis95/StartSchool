const x = 101;

let text = x.toString().split("");
let reverse = text.slice().reverse();

text = text.join("");
reverse = reverse.join("");

console.log(text, reverse);

if ( text == reverse) {
    console.log("true");
} else {
    console.log("false");
}

