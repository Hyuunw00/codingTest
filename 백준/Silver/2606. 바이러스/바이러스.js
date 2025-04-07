const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
const edgeArr = input.map((item) => item.split(" ").map(Number));

//---------------------

const graph = Array.from({ length: N + 1 }, () => []);

for (let i of edgeArr) {
  const [start, end] = i;
  graph[start].push(end);
  graph[end].push(start);
}

const visited = {};
let count = 0;
visited[1] = true;
DFS(1);

function DFS(node) {
  const neighborArr = graph[node];

  for (let neighbor of neighborArr) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      count++;
      DFS(neighbor);
    }
  }
}

console.log(count);
