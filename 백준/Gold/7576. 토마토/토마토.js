const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const maps = input.map((item) => item.split(" ").map(Number));

//-----------------

/*
1. 아이디어
초기에 익은 토마토를 queue에 전부 저장해놓는다. 
queue의 길이가 0이 될때까지 반복하면서 하루동안 익은 토마토를 확장 시켰으면 day+1 해준다.


2. 시간복잡도
O(V+E) = 5NM = 5백만 =가능

3. 자료구조
상자를 나타내는 이중 배열

*/

let day = 0;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let queue = [];
let subQueue = [];

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (maps[row][col] === 1) {
      queue.push([row, col]);
    }
  }
}

while (queue.length) {
  subQueue = [];
  queue.forEach(([y, x]) => {
    bfs(y, x);
  });
  queue = subQueue;
  if (queue.length) day++;
}

function bfs(cy, cx) {
  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
      if (maps[ny][nx] === 0) {
        maps[ny][nx] = 1;
        subQueue.push([ny, nx]);
      }
    }
  }
}

const result = maps.some((row) => row.some((item) => item === 0)) ? -1 : day;

console.log(result);
