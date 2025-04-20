const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const words = input;
// -------------

/*
1. 아이디어
객체에 각각 문자의 갯수를 저장하고, 현재 문자가 타겟문자가 아닌데 객체에 존재하면 그룹 단어가 아니다.

2. 시간복잡도
O(n^2)
3. 자료구조
문자의 갯수를 담을 객체

*/
let count = 0;

for (let word of words) {
  const obj = {};
  let target;

  for (let w of word) {
    if (obj[w]) {
      if (target === w) obj[w] += 1;
      else {
        target = null;
        break;
      }
    } else {
      target = w;
      obj[w] = 1;
    }
  }

  target ? count++ : count;
}

console.log(count);
