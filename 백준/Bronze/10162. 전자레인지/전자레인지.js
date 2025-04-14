const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

let T = Number(input);

const timer = [300, 60, 10];
const count = [0, 0, 0];
let i = 0;

count[0] = Math.floor(T / timer[0]);
const T2 = T % timer[0];
count[1] = Math.floor(T2 / timer[1]);
const T3 = T2 % timer[1];
count[2] = Math.floor(T3 / timer[2]);
const final = T3 % timer[2];

if (final !== 0) console.log(-1);
else console.log(count[0] + " " + count[1] + " " + count[2]);
