const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const dp = new Array(N + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= N; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }

  console.log(dp[N]);
}
