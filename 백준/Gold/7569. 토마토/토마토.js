const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);

const arr = input.map((item) => item.split(" ").map(Number));
const boxes = [];

for (let i = 0; i < arr.length; i += N) {
  const box = [];
  for (let j = i; j < i + N; j++) {
    box.push(arr[j]);
  }
  boxes.push(box);
}

// -------------------------

/*
1. 아이디어
익은 토마토가 하루가 지날때마다 전파 -> BFS , 하루가 지나면 day++ , queue 최신화


2. 시간복잡도
O((V+E)*H) = O(5NM * H) = 50만 = 가능

3. 자료구조
3차원 박스 배열
3차원 방문 배열
*/

const visited = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => new Array(M).fill(false))
);
let queue = [];
let count = 0;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const dh = [1, -1, 1, -1];

for (let height = 0; height < boxes.length; height++) {
  for (let row = 0; row < boxes[height].length; row++) {
    for (let col = 0; col < boxes[height][row].length; col++) {
      if (boxes[height][row][col] === 1) queue.push([height, row, col]);
    }
  }
}

bfs();

function bfs() {
  while (queue.length) {
    let nextQueue = [];

    queue.forEach((item) => {
      const [h, y, x] = item;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
          if (boxes[h][ny][nx] === 0) {
            boxes[h][ny][nx] = 1;
            nextQueue.push([h, ny, nx]);
          }
        }
        const nh = h + dh[i];
        if (nh >= 0 && nh < H) {
          if (boxes[nh][y][x] === 0) {
            boxes[nh][y][x] = 1;
            nextQueue.push([nh, y, x]);
          }
        }
      }
    });
    queue = nextQueue;
    if (queue.length) count++;
  }
}

const result = boxes.some((box) =>
  box.some((item) => item.some((value) => value === 0))
)
  ? -1
  : count;

console.log(result);
