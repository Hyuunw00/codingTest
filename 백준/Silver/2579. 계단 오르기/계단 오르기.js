const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());
const points = input.map(Number);
//-----------------------------

/*

1. 아이디어
최종 목적지에 도달하기 까지 얻을 수 있는 점수의 최댓값
현재 계단기준으로 2칸 전의 값들중 최댓값과 1칸 전의 값들중 최솟값을 배열형태로 저장 (메모이제이션)
dp[i] = Math.max(dp[i - 2], dp[i - 3] + points[i - 2]) + points[i - 1];

2. 시간복잡도
O(N)
3. 자료구조
메모이제이션 할 값들을 저장할 배열

*/

const dp = new Array(N + 1).fill(0);

dp[1] = points[0];
dp[2] = Math.max(points[0] + points[1], points[1]);
dp[3] = Math.max(points[0], dp[0] + points[1]) + points[2];

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + points[i - 2]) + points[i - 1];
}

console.log(dp[N]);
