const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  dp = new Array(N + 1).fill(0);

  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= N; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }

  console.log(dp[N].join(" "));
}
