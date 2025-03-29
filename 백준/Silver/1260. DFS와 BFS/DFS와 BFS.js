const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

const arr = [];
for (let i of input) {
  arr.push(i.split(" ").map(Number));
}

// -------------

const resultDfs = [];
const resultBfs = [];

const map = new Map();

for (let [start, end] of arr) {
  if (!map.get(start)) {
    map.set(start, []);
  }
  if (!map.get(end)) {
    map.set(end, []);
  }
  map.get(start).push(end);
  map.get(end).push(start);
}

const visitedDFS = new Array(N).fill(false);
const visitedBFS = new Array(N).fill(false);

visitedBFS[V - 1] = true;
let queue = [V];

// BFS
while (queue.length > 0) {
  const value = queue.shift();
  resultBfs.push(value);
  const nodes = map.get(value) || []; // undefined일 경우 빈 배열을 사용

  // nodes가 비어있지 않으면 정렬 후 처리
  nodes.sort((a, b) => a - b);

  for (let node of nodes) {
    if (!visitedBFS[node - 1]) {
      visitedBFS[node - 1] = true;
      queue.push(node);
    }
  }
}

// DFS
dfs(V);

function dfs(value) {
  if (!visitedDFS[value - 1]) {
    resultDfs.push(value);
    visitedDFS[value - 1] = true;
  } else {
    return;
  }
  const nodes = map.get(value) || []; // undefined일 경우 빈 배열을 사용
  nodes.sort((a, b) => a - b);

  for (let i of nodes) {
    dfs(i);
  }
}

// 출력
console.log(resultDfs.join(" "));
console.log(resultBfs.join(" "));
