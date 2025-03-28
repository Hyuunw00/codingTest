const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let [y, x, direction] = input.shift().split(" ").map(Number);

const maps = input.map((line) => line.split(" ").map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let count = 0;

while (true) {
  if (maps[y][x] === 0) {
    maps[y][x] = 2;
    count++;
  }

  let isCleaned = false;

  for (let i = 0; i < 4; i++) {
    const newDirection = (direction + 3) % 4;
    const ny = y + dy[newDirection];
    const nx = x + dx[newDirection];

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && maps[ny][nx] === 0) {
      y = ny;
      x = nx;
      direction = newDirection;
      isCleaned = true;
      break;
    }

    direction = newDirection;
  }

  if (!isCleaned) {
    const ny = y - dy[direction];
    const nx = x - dx[direction];

    if (ny >= 0 && ny < N && nx >= 0 && nx < M && maps[ny][nx] !== 1) {
      y = ny;
      x = nx;
    } else {
      break;
    }
  }
}

console.log(count);