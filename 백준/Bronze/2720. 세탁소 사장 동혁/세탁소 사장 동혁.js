const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const coins = [25, 10, 5, 1];
  const result = [0, 0, 0, 0];
  let C = input.shift();
  let i = 0;
  while (i < 4) {
    result[i] = Math.floor(C / coins[i]);

    C = C - coins[i] * result[i];
    i++;
  }
  console.log(result.join(" "));
}
