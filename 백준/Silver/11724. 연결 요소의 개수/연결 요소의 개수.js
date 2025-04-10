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

let order = 1; //노드는 1개이상이므로 1번 노드부터 출발
let count = 0; // 요소의 갯수
const visited = {}; // 방문여부

while (Object.keys(visited).length < N) {
  if (!visited[order]) {
    dfs(order);
    count++;
  }
  order++;
}

function dfs(node) {
  visited[node] = true;

  for (let neighbor of graph[node] || []) {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

console.log(count);
