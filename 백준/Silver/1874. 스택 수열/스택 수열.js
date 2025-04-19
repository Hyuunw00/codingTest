const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());

const arr = input.map(Number);

/*
1. 아이디어


2. 시간복잡도
O(n)

3. 자료구조
오름차순으로 숫자를 담을 stack 배열
결과를 담을 배열
*/
const stack = [];
let ans = [];
let j = 1;

for (let i = 0; i < arr.length; i++) {
  const value = arr[i];

  while (j <= value) {
    ans.push("+");
    stack.push(j);
    j++;
  }

  ans.push("-");
  let stackPop = stack.pop();

  if (stackPop !== value) {
    ans = ["NO"];
    break;
  }
}

console.log(ans.join("\n"));
