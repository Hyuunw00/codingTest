const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const numN = input.shift().split(" ").map(Number);
const M = Number(input.shift());
const numM = input.shift().split(" ").map(Number);

// ---------------
/*
1.아이디어
M배열 순회하면서 N배열 이진탐색
N배열 오름차순 정렬

2.시간복잡도
nlogn + mlogn  =  (m+n)logn < 1억내
3.자료구조
 결과 숫자형 배열

*/
let count = 0;

const map = new Map();
for (let i of numN) {
  map.set(i, (map.get(i) || 0) + 1);
}

numN.sort((a, b) => a - b);
const result = [];

for (let i of numM) {
  count = 0;
  search(0, numN.length - 1, i);
  result.push(count * map.get(i) || 0);
}
function search(start, end, target) {
  const mid = Math.floor((start + end) / 2);

  if (start === end) {
    if (target === numN[start]) {
      count++;
      return;
    } else {
      return 0;
    }
  }

  if (numN[mid] < target) {
    search(mid + 1, end, target);
  } else {
    search(start, mid, target);
  }
}

console.log(result.join(" "));
