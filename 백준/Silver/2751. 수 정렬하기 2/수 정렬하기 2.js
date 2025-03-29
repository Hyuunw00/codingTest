const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const num = [];
for (let i of input) {
  num.push(Number(i));
}

// ------------------

num.sort((a, b) => a - b);

console.log(num.join("\n"));
