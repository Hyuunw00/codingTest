const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const maps = input.map((item) => item.split(""));

//------------------------

/*
1. 아이디어
적록색약이 아닌 경우 R,G,B 각각 나누어서 구역의 DFS를 통해 갯수를 구하고 더해주면 된다. 
적록색약의 경우 R=G,B 두가지 경우를 각각 나누어서 마찬가지로 DFS

2.시간복잡도
O(V+E) = 5VE= 5만 = 가능

3, 자료구조
지도 이중 배열
방문 이중배열
*/

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const blindNessMaps = maps.map((row) =>
  row.map((item) => (item === "G" ? "R" : item))
);

function isBlindNess(maps) {
  let count = 0;
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visited[row][col]) continue;
      if (maps[row][col] === "B") {
        dfs(row, col, "B");
        count++;
      } else if (maps[row][col] === "R") {
        dfs(row, col, "R");
        count++;
      } else {
        dfs(row, col, "G");
        count++;
      }
    }
  }
  function dfs(y, x, color) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[ny][nx]) {
        if (maps[ny][nx] === color) {
          visited[ny][nx] = true;
          dfs(ny, nx, color);
        }
      }
    }
  }

  return count;
}

const result1 = isBlindNess(maps);
const result2 = isBlindNess(blindNessMaps);

console.log(result1, result2);
