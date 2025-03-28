const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const numN = input.shift().split(" ").map(Number);
const M = input.shift();
const numM = input.shift().split(" ").map(Number);
// ----------------

/*
1. 아이디어
빈도수세기 방법 Set에 N요소 저장하고
M요소 순회하면서 포함하면 1 아니면 0


2. 시간복잡도
O(N+M) = 20만
3. 자료구조
Set
*/

const set = new Set();
for (let i = 0; i < numN.length; i++) {
  set.add(numN[i]);
}

for (let j = 0; j < numM.length; j++) {
  if (set.has(numM[j])) console.log(1);
  else console.log(0);
}
