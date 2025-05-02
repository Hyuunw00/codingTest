const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim();

const n = input;

/*
1. 아이디어
n에 들어있는 자릿수별 숫자를 조합해서 30의 배수가 되는 가장 큰수 찾기
최대 10^5의 숫자로 구성되어있기 때문에 완전탐색은 불가
n의 각각 숫자를 내림차순 정렬해놓는다.

30의 배수가 되기위한조건
30은 3과 10의 공배수다.
1) 가장 끝 자릿수가 0이어야한다. 0없으면 -1
2) 각자릿수의 합이 3의 배수여야한다.  안되면 -1

2. 시간복잡도
N이 최대 10^5개의 숫자로 구성되어 있다 = 10^5자릿수를 가질 수 있다는 뜻
시간복잡도는 nlogn보다 크면 안된다.

3. 자료구조
*/

const sortedN = n.split("").sort((a, b) => b - a);

const sum = sortedN.reduce((prev, cur) => prev + Number(cur), 0);

if (sum % 3 !== 0 || sortedN[sortedN.length - 1] !== "0") console.log(-1);
else {
  console.log(sortedN.join(""));
}
