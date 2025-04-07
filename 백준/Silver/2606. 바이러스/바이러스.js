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

const list = new Map();

for (let [node1, node2] of edgeArr) {
  if (!list.has(node1)) list.set(node1, []);
  if (!list.has(node2)) list.set(node2, []);

  list.get(node1).push(node2);
  list.get(node2).push(node1);
}

const visited = {};
let count = 0;
visited[1] = true;
DFS(1);

function DFS(node) {
  const neighborArr = list.get(node) || [];

  for (let neighbor of neighborArr) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      count++;
      DFS(neighbor);
    }
  }
}

console.log(count);
