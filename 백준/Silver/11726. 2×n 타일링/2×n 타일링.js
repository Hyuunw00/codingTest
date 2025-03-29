const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim();

const n = Number(input);

//-------------

/*
1. 아이디어
현재 위치의 값(k)은 k-1까지의 값과 k-2까지의 값의 합으로 이루어져 있다. for문을 돌면서 두 값의 합을 배열에 push
첫번째, 두번째 값은 문제를 통해 구할 수 있다.
2. 시간복잡도
n

3. 자료구조
더한 값들을 저장할 배열

*/

const result = [1, 2];

for (let i = 2; i < n; i++) {
  result.push((result[i - 1] + result[i - 2]) % 10007);
}

console.log(result[n - 1]);
