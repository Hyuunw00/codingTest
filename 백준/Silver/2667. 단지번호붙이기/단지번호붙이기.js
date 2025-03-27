const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Map = [];
for (let i = 1; i < input.length; i++) {
  Map.push(
    input[i]
      .toString()
      .trim()
      .split("")
      .map((el) => Number(el))
  );
}
//----

const check = Array.from({ length: N }).map(() => new Array(N).fill(false));
let count = 0;
const result = [];

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (Map[row][col] === 1 && check[row][col] === false) {
      check[row][col] = true;
      count = 0;
      dfs(row, col);
      result.push(count);
    }
  }
}

function dfs(y, x) {
  count += 1;
  const my = [0, 1, 0, -1];
  const mx = [1, 0, -1, 0];

  for (let i = 0; i < 4; i++) {
    const dy = y + my[i];
    const dx = x + mx[i];

    if (0 <= dy && dy < N && 0 <= dx && dx < N) {
      if (Map[dy][dx] === 1 && check[dy][dx] === false) {
        check[dy][dx] = true;
        dfs(dy, dx);
      }
    }
  }
}

// 결과
console.log(result.length);
const sortedArr = result.sort((a, b) => a - b);
for (let i of sortedArr) {
  console.log(i);
}
