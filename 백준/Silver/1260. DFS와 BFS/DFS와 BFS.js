const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const edgeArr = input.map((item) => item.split(" ").map(Number));
// ---------------

// 인접리스트
const list = new Map();
for (let i = 0; i < edgeArr.length; i++) {
  const [node1, node2] = edgeArr[i];
  if (!list.has(node1)) list.set(node1, []);
  if (!list.has(node2)) list.set(node2, []);
  list.get(node1).push(node2);
  list.get(node2).push(node1);
}
for (let [key, value] of list) {
  list.set(
    key,
    value.sort((a, b) => a - b)
  );
}

const currentNode = V;

// 1. DFS
const visitedDFS = {};
const resultDFS = [];

visitedDFS[currentNode] = true;

DFS(currentNode);

function DFS(node) {
  resultDFS.push(node);
  const neighborArr = list.get(node) || [];
  for (let neighbor of neighborArr) {
    if (!visitedDFS[neighbor]) {
      visitedDFS[neighbor] = true;
      DFS(neighbor);
    }
  }
}

console.log(resultDFS.join(" "));

// 2. BFS
const visitedBFS = {};
const queue = [];
const resultBFS = [];

queue.push(currentNode);
visitedBFS[currentNode] = true;

while (queue.length) {
  const value = queue.shift();
  resultBFS.push(value);
  const neighborArr = list.get(value) || [];
  for (let neighbor of neighborArr) {
    if (!visitedBFS[neighbor]) {
      visitedBFS[neighbor] = true;
      queue.push(neighbor);
    }
  }
}
console.log(resultBFS.join(" "));
