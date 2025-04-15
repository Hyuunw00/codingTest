const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

const N = Number(input);

/*
1. 아이디어
연산횟수가 최소가 되도록 하며 N이 1이 되도록 해야한다.
1이 되도록 연산할 수 있는 경우중 연산횟수가 최소인 경우를 찾으면 된다
DP 활용 
조건에 따라 , dp[n] = Math.min(dp[n-1]+1,dp[n/2]+1, dp[n/3]+1)

2. 시간복잡도
O(N)
3. 자료구조
연사결과를 받을 배열
*/

const nums = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  nums[i] = nums[i - 1] + 1;
  if (i % 2 === 0) nums[i] = Math.min(nums[i], nums[i / 2] + 1);
  if (i % 3 === 0) nums[i] = Math.min(nums[i], nums[i / 3] + 1);
}

console.log(nums[N]);
