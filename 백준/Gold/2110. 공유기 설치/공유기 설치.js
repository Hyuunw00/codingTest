const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const home = input.map(Number);

/*
1.아이디어
초기에 home 좌표 배열을 오름차순 정렬


2.시간복잡도
max: O(nlogn)

3.자료구조
*/

const sortedHome = home.sort((a, b) => a - b);

// 인접 공유기 사이 거리
let start = 1;
let end = sortedHome[sortedHome.length - 1] - sortedHome[0];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = sortedHome[0];

  for (let cur of sortedHome) {
    if (cur - prev < mid) continue;
    prev = cur;
    count++;
  }

  if (C > count) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);
