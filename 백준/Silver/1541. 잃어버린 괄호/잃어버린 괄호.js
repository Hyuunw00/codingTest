const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

const S = input;

// ------------

/*
1. 아이디어
괄호를 어디에 넣냐가 중요한게 아니라 괄호를 넣어서 어떤 값이 나오냐가 중요함
그냥 +, - 기준으로 split해서 배열화시킨다음 나온 값의 합 또는 차를 구해서 그중에서 최솟값을 고르면된다.

2. 시간복잡도
O(N)
3. 자료구조

*/

const y = S.split("-");

const yResult = y
  .map((item) => item.split("+").reduce((prev, cur) => prev + Number(cur), 0))
  .reduce((prev, cur) => prev - cur);
console.log(yResult);
