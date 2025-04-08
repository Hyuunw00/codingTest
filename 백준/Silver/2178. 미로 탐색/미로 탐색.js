const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maps = input.map((item) => item.split("").map(Number));

// ----------

/*
1. 아이디어
DF or  BFS 

2. 시간복잡도
O(V+E)= 5NM = 약 5만 -> 가능

3. 자료구조
지도를 나타내는 이중 배열
방문여부를 표시하는 visited 이중 배열
BFS를 위한 queue 배열
*/

let count = 1;
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const queue = [[0, 0]];
const mx = [1, 0, -1, 0];
const my = [0, 1, 0, -1];

visited[0][0] = true;

BFS();

function BFS() {
  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [cy, cx] = queue.shift();
      if (cy === N - 1 && cx === M - 1) return count;

      for (let j = 0; j < 4; j++) {
        const [dx, dy] = [cx + mx[j], cy + my[j]];
        if (dx >= 0 && dx < M && dy >= 0 && dy < N) {
          if (!visited[dy][dx] && maps[dy][dx] === 1) {
            visited[dy][dx] = true;
            queue.push([dy, dx]);
          }
        }
      }
    }
    count++;
  }
}

console.log(count);
