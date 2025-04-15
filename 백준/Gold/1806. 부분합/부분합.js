const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input.shift().split(" ").map(Number);

const nums = input.shift().split(" ").map(Number);

//  ----------

let min = Infinity;

let start = 0;
let end = 0;
let total = nums[start];

while (start <= end && end < nums.length) {
  if (total >= S) {
    min = Math.min(min, end - start + 1);
    total -= nums[start];
    start++;
  } else {
    end++;
    total += nums[end];
  }
}

console.log(min === Infinity ? 0 : min);
