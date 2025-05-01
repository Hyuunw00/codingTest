const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

/*
 1. 아이디어
 지원자 수만큼 돌면서 지원자가 합불인지 여부를 체크해야한다.
 지원자수가 최대 10만이기때문에 n^2은 안된다.

 서류순위를 기준으로 오름차순 정렬하고
 가장 낮은 면접순위와 현재 지원자의 면접순위를 비교한다.

 2. 시간복잡도
 n^2보다 작아야한다.
 O(nlogn)
 3. 자료구조

  */

const result = [];
let index = 0;
for (let i = 0; i < T; i++) {
  const N = Number(input[index++]);
  const applicants = [];
  for (let j = 0; j < N; j++) {
    const [doc, interview] = input[index++].split(" ").map(Number);
    applicants.push([doc, interview]);
  }
  applicants.sort((a, b) => a[0] - b[0]);
  let minRank = applicants[0][1];
  let count = 1;

  for (let i = 1; i < applicants.length; i++) {
    if (applicants[i][1] < minRank) {
      count++;
      minRank = applicants[i][1];
    }
  }
  console.log(count);
}
