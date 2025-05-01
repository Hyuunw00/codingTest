const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim();

const [A, B] = input.split(" ").map(Number);
/*
1. 아이디어
연산을 한번할때마다 count 증가시키고 queue배열에 담아서 BFS 탐색 
queue가 비었는데도 못찾으면 -1 반환

2. 시간복잡도

3, 자료구조
queue 배열

*/

let count = 0;
let queue = [A];
let result = -1;
bfs(A);

function bfs(num) {
  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const value = queue.shift();
      if (B === value) {
        result = count;
        return;
      }
      if (B > value) {
        queue.push(value * 2);
        queue.push(Number(value + "1"));
      }
    }
    count++;
  }
}

console.log(result === -1 ? result : result + 1);
