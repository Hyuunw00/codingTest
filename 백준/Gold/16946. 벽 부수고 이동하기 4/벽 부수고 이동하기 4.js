const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const maps = input.map((item) => item.split("").map(Number));

// ----------------------------

/*

1. 아이디어
maps을 돌면서 1이면 0으로 바꾸고 count++, 주변에 0이 있다면 count++  / DFS


2. 시간복잡도
O(V+E) = 5* 10만 = 50만
3. 자료구조
maps 이중배열
방문 이중배열
*/

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (maps[row][col] === 0 && !visited[row][col]) {
      bfs(row, col);
    }
  }
}

function bfs(y, x) {
  let count = 1;

  const queue = [];
  const wall = [];
  queue.push([y, x]);
  visited[y][x] = true;

  while (queue.length) {
    const [cy, cx] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx]) {
        if (maps[ny][nx] === 0) {
          visited[ny][nx] = true;
          count++;
          queue.push([ny, nx]);
        } else {
          visited[ny][nx] = true;
          wall.push([ny, nx]);
        }
      }
    }
  }
  for (let [y, x] of wall) {
    maps[y][x] += count;
    visited[y][x] = false;
  }
}

const result = maps
  .map((row) => row.map((item) => item % 10).join(""))
  .join("\n");
console.log(result);
