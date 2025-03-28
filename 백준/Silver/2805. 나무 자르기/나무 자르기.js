const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const trees = input.shift().split(" ").map(Number);

// ---------------

/*
1. 아이디어
이진 탐색 활용
나무 배열에서 이진탐색으로 중간 값을 찾고 중간값을 기준으로 나무를 뺐을때 목표값과 비교
크면 절단기 길이를 늘리고 작으면 절단기 길이 줄이기

2. 시간복잡도
O(NlogN + )

3.자료구조
*/
trees.sort((a, b) => a - b);

let min = 0; //절단기 최소높이
let max = Math.max(...trees); // 절단기 최대높이
let result = 0; // 반환할 절단기 높이

while (min <= max) {
  let total = 0; // 잘린 나무의 길이 합
  let mid = Math.floor((min + max) / 2);
  trees.forEach((item) => {
    total += item > mid ? item - mid : 0;
  });

  if (total >= M) {
    if (mid > result) result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);
