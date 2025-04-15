const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString();

const N = Number(input);

/*
1. 아이디어
3,5kg봉지을 가지고 Nkg이 정확이 0이 되게 만들어야하기 때문에 그리디로 해결할 수 없는 문제다.
5kg으로 담을 수 있는 최대 갯수를 구한후 N이 0이 될때까지 반복하며 0이 아닐경우 최대 갯수를 1개씩 줄인다.

2. 시간복잡도
O(N)

3. 자료구조

*/

let result = -1;
let max5Len = Math.floor(N / 5);

while (max5Len >= 0) {
  const rest = N - max5Len * 5;
  if (rest % 3 === 0) {
    result = rest / 3 + max5Len;
    break;
  } else {
    max5Len--;
  }
}

console.log(result);
