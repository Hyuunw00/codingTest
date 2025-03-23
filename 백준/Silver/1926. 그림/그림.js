const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");
// --------------------------------------------------

const [n, m] = input[0].split(" ").map((item) => Number(item));
const inputLine = [];
for (let i = 1; i < input.length; i++) {
  inputLine.push(
    input[i]
      .toString()
      .trim()
      .split(" ")
      .map((el) => Number(el))
  );
}

/*
  1. 아이디어 
   2중 for문 돌면서 값이 1이고  방문x -> BFS 

  2. 시간복잡도: V + E
   V= n*m=250000
   E= n*m*4
   V+E= 5V = 5*25000= 약 100만 <1억 통과!

  3. 자료구조
   그래프 전체 지도: 정수 이차원 배열
   방문  여부: bool 이차원 배열
   Queue 사용
  */

function solution(n, m, inputLine) {
  const check = Array.from({ length: n }, () => new Array(m).fill(false));
  let count = 0;
  let max = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (inputLine[row][col] === 1 && check[row][col] === false) {
        count++;
        check[row][col] = true;
        // 그림의 넓이 구하기
        max = Math.max(max, bfs(row, col));
      }
    }
  }

  function bfs(row, col) {
    let size = 1;
    const my = [0, 1, 0, -1];
    const mx = [1, 0, -1, 0];
    const result = [[row, col]];

    while (result.length > 0) {
      const [cy, cx] = result.shift();
      for (let i = 0; i < 4; i++) {
        const ry = cy + my[i];
        const rx = cx + mx[i];
        if (rx >= 0 && rx < m && ry >= 0 && ry < n) {
          if (inputLine[ry][rx] === 1 && check[ry][rx] === false) {
            size++;
            check[ry][rx] = true;
            result.push([ry, rx]);
          }
        }
      }
    }
    return size;
  }
  return [count, max];
}

solution(n, m, inputLine).map((el) => console.log(el));
