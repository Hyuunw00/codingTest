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
const result = [];

let i = 1;
let j = 0;

while (i <= n) {
  stack.push(i);
  ans.push("+");
  while (stack.length && stack[stack.length - 1] === arr[j]) {
    ans.push("-");
    stack.pop();
    result.push(arr[j]);
    j++;
  }
  i++;
}

if (result.join("") === arr.join("")) {
  console.log(ans.join("\n"));
} else {
  console.log("NO");
}
