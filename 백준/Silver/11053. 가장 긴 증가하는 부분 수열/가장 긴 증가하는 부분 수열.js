const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());

const numArr = input.shift().split(" ").map(Number);

// ----------

/*
1. 아이디어
각 수열의 특정 위치에서 가장 긴 증가하는 부분을 dp배열에 저장한다.

2. 시간복잡도
O(n^2)
3. 자료구조

*/

const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  const stack = [];
  const prevArr = numArr.slice(0, i);
  for (let j = 0; j <= i; j++) {
    if (prevArr[j] < numArr[i]) stack.push(dp[j]);
  }
  if (stack.length) {
    dp[i] = Math.max(...stack) + 1;
  }
}
console.log(Math.max(...dp));
