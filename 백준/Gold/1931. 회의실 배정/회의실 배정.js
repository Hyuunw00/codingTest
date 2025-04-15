const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const discuss = input.map((item) => item.split(" ").map(Number));

//  -------------------

/*
1. 아이디어
회의실 끝시간을 기준으로 오름차순 정렬
현재 인덱스가 discuss 배열의길이보다 커질때까지 반복


2. 시간복잡도
O(n)
3. 자료구조
회의가 끝나는 시간 finish
회의 갯수 count
현재 index currentIndex

*/

const sortedDiscuss = discuss.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let finishTime = 0;
let count = 0;
let currentIndex = -1;

while (currentIndex < sortedDiscuss.length - 1) {
  currentIndex++;
  const [start, end] = sortedDiscuss[currentIndex];
  if (finishTime <= start) {
    finishTime = end;
    count++;
  }
}

console.log(count);
