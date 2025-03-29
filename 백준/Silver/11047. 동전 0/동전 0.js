const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);

const coins = [];
for (let i = 0; i < N; i++) {
  coins.push(Number(input[i]));
}

// ------------------

/*
1.아이디어
동전의 갯수가 최소가 되기위해서는 값이 큰 동전부터 차례대로 빼줘야한다.
->그리디 알고리즘 방식
반례? 동전의 값은 이전 값의 배수이므로 반례는 존재하지 않는다. 즉 가장 큰 값부터 제거하는 것이 맞다.


2.시간복잡도
동전의 갯수만큼 순회 n번

3.자료구조
숫자형 배열
*/

let count = 0;

// 동전배열 reverse
coins.reverse();

for (let coin of coins) {
  count += Math.floor(K / coin); //동전의 갯수
  K = K % coin; // 남은 돈
}

console.log(count);
