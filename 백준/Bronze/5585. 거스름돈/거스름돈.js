const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

const N = Number(input);

// --------------

let rest = 1000 - N;

let count = 0;

count += Math.floor(rest / 500);
rest = rest % 500;
count += Math.floor(rest / 100);
rest = rest % 100;
count += Math.floor(rest / 50);
rest = rest % 50;
count += Math.floor(rest / 10);
rest = rest % 10;
count += Math.floor(rest / 5);
rest = rest % 5;
count += Math.floor(rest / 1);
rest = rest % 1;

console.log(count);
