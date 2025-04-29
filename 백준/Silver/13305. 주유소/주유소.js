const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .split("\n");

const N = Number(input.shift());
const distanceArr = input.shift().split(" ").map(BigInt);
const priceArr = input.shift().split(" ").map(BigInt);

priceArr.splice(N - 1, 1);

/*
1. 아이디어
가장 왼쪽에서 가장 우측도시까지 갈때 최소비용을 구하려면 가장 기름이 싼 도시에서 남은 거리만큼 다채우는게 제일 이득이다.
최소 기름의 값을 구하고 현재 도시 기름이 최소면 남은 거리만큼 다 채우고 아니면 그냥 다음 도시만큼의 거리만 채운다.

2. 시간복잡도
O(n)

3. 자료구조

*/

// 서브 태스크 1 	(모든 주유소의 리터당 가격은 1원이다.)
// console.log(distanceArr.reduce((prev, cur) => prev + cur, 0));

// 서브 테스크 2 ( 2 ≤ N ≤ 1,000, 제일 왼쪽 도시부터 제일 오른쪽 도시까지의 거리는 최대 10,000, 리터 당 가격은 최대 10,000이다.)

let money = 0n;
let currentPrice = Infinity;
for (let i = 0; i < priceArr.length; i++) {
  if (currentPrice > priceArr[i]) {
    currentPrice = priceArr[i];
  }

  money += currentPrice * distanceArr[i];
}

console.log(String(money));
