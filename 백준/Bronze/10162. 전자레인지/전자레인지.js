const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

let T = Number(input);

const timer = [200, 60, 10];
const count = [0, 0, 0];
let i = 0;

while (i < 3) {
  count[i] = Math.floor(T / timer[i]);
  T = T % timer[i];
  i++;
}

const result = T !== 0 ? -1 : count.join(" ");

console.log(result);
