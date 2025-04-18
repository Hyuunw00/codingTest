const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const N = input.shift();

const values = input.map((item) => item.split(" ").map(Number));

// ----------------------

/*
1. 아이디어
입력받은 이중배열을 두번째 집부터 시작해서 각각의 rgb에서 비용이 최소가 되도록 N번 반복하며 갱신 
갱신된 N번째 집의 각각의 비용들중 최솟값 출력

2. 시간복잡도
O(n)
3. 자료구조
비용을 최신화할 이중배열

*/

const dp = values;

for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[N - 1]));
