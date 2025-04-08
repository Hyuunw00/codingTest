const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

/*
1. 아이디어
DFS로 1이 더이상 없을때까지 찾은후 없으면 count++
2. 시간복잡도
O(V+E) =5NM = 가능
3. 자료구조

*/

// 테스트케이스별 호출
for (let i = 0; i < T; i++) {
  const [M, N, K] = input.shift().split(" ").map(Number); // N행 M열
  const location = input
    .splice(0, K)
    .map((item) => item.split(" ").map(Number));
  const maps = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let [X, Y] of location) {
    maps[Y][X] = 1;
  }

  const mx = [1, 0, -1, 0];
  const my = [0, 1, 0, -1];

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  let count = 0;

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (!visited[row][col] && maps[row][col] === 1) {
        DFS([row, col]);
        count++;
      }
    }
  }

  function DFS([y, x]) {
    for (let i = 0; i < 4; i++) {
      const dx = x + mx[i];
      const dy = y + my[i];
      if (dx >= 0 && dx < M && dy >= 0 && dy < N) {
        if (!visited[dy][dx] && maps[dy][dx] === 1) {
          visited[dy][dx] = true;
          DFS([dy, dx]);
        }
      }
    }
  }
  console.log(count);
}
