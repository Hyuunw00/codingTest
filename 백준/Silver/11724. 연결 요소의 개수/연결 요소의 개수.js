const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const list = input.map((item) => item.split(" ").map(Number));

/// -----------------

const graph = {};

for (let [node1, node2] of list) {
  if (!graph[node1]) graph[node1] = [];
  if (!graph[node2]) graph[node2] = [];

  graph[node1].push(node2);
  graph[node2].push(node1);
}

let count = 0; // 요소의 갯수
const visited = {}; // 방문여부
let queue = [];

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    count++;
  }
}

function bfs(node) {
  queue = [node];
  while (queue.length) {
    const node = queue.shift();
    for (let neighbor of graph[node] || []) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

console.log(count);
