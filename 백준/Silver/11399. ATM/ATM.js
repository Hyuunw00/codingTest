const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());
const P = input.shift().split(" ").map(Number);

// ---------------------------------

/*
1. 아이디어
인출이 가장 빨리 끝나는 사람부터 우선순위를 두면 각각 인출하는데 기다리고 걸리는 시간이  최소가 되게된다.
1, 1+2, 1+2+3, 1+2+3+3, 1+2+3+3+4 
-> 1 2 3 3 4
dp[n] = dp[n-1] + P[n-1];

2. 시간복잡도
O(n)
3. 자료구조
*/

const dp = new Array(N + 1).fill(0);
const sortedP = P.sort((a, b) => a - b);
dp[1] = sortedP[0];

for (let i = 2; i <= sortedP.length; i++) {
  dp[i] = dp[i - 1] + sortedP[i - 1];
}

const result = dp.reduce((prev, cur) => prev + cur, 0);
console.log(result);
