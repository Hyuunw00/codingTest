const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const NArr = input.shift().split(" ").map(Number);

const M = Number(input.shift());
const MArr = input.shift().split(" ").map(Number);

// -------------------

const result = new Array(M).fill(0);
const sortedNArr = NArr.sort((a, b) => a - b);

function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

for (let i = 0; i < MArr.length; i++) {
  if (search(sortedNArr, MArr[i])) result[i] = 1;
}

console.log(result.join(" "));
