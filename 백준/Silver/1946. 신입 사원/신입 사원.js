const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

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

rl.on("close", () => {
  let t = Number(input.shift());
  let index = 0;
  const results = [];

  for (let i = 0; i < t; i++) {
    const n = Number(input[index++]);
    const applicants = [];

    for (let j = 0; j < n; j++) {
      const [doc, interview] = input[index++].split(" ").map(Number);
      applicants.push([doc, interview]);
    }

    // 서류 기준 오름차순 정렬
    applicants.sort((a, b) => a[0] - b[0]);

    let count = 1;
    let minRank = applicants[0][1];

    for (let k = 1; k < n; k++) {
      if (applicants[k][1] < minRank) {
        count++;
        minRank = applicants[k][1];
      }
    }

    results.push(count);
  }

  console.log(results.join("\n"));
});
