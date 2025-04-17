const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  // 1 ≤ k, n ≤ 14
  const K = Number(input.shift());
  const N = Number(input.shift());

  const dp = Array.from({ length: K + 1 }, () => new Array(N + 1).fill(0));
  for (let i = 1; i <= N; i++) dp[0][i] = i;

  for (let k = 1; k <= K; k++) {
    for (let n = 1; n <= N; n++) {
      for (let m = 1; m <= n; m++) {
        dp[k][n] += dp[k - 1][m];
      }
    }
  }
  console.log(dp[K][N]);
}

/*
1. 아이디어
k층 n호 사람수 = k-1층 1호 ~ k-1층 n호까지 사람 수의 합

2. 시간복잡도
O(n^3) 
3. 자료구조
층-호수 마다 사람의 수를 저장할 이중배열
*/
