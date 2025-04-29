const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

let S = Number(input);

// ---------------

/*
1. 아이디어
우선 서론다른 N개의 수의 합이 S가 될때 N의 갯수가 많아지려면 가장 작은수부터 시작해서 더해줘야할것이다.
즉, 1부터 더해가며 S가 될때 까지 갯수를 세면된다.

2. 시간복잡도
시간복잡도는 n보다는 작을 것
3. 자료구조

*/

let count = 0;
let num = 1;
while (true) {
  S -= num;
  num++;
  if (S < 0) break;
  count++;
  if (S === 0) break;
}
console.log(count);
