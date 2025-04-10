const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const maps = input.map((item) => item.split(" ").map(Number));

// ---------------------

/*
1. 아이디어
벽 3개를 세우는 모든 경우의수 구하기
각각의 경우의수로 나온 지도 이중배열을 깊은복사해서 바이러스를 기준으로 bfs
바이러스 확산이 완료된 이중배열에서 0의 갯수를 저장
이걸 반복한다.
최대값을 구한다.

2. 시간복잡도
O((V+E) * NM C 3 ) = 64 * 4 *64*63*31 / 3 = 몇백반 = 가능
3. 자료구조
지도 이중배열
방문여부 이중배열

*/

const empty = [];
const virus = [];
let maxCount = 0;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (maps[row][col] === 0) empty.push([row, col]);
    if (maps[row][col] === 2) virus.push([row, col]);
  }
}

// 빈공간에 벽만들기
for (let i = 0; i < empty.length - 2; i++) {
  for (let j = i + 1; j < empty.length; j++) {
    for (let k = j + 1; k < empty.length; k++) {
      const copyMaps = JSON.parse(JSON.stringify(maps));

      copyMaps[empty[i][0]][empty[i][1]] = 1;
      copyMaps[empty[j][0]][empty[j][1]] = 1;
      copyMaps[empty[k][0]][empty[k][1]] = 1;

      const dx = [1, 0, -1, 0];
      const dy = [0, 1, 0, -1];
      const visited = Array.from({ length: N }, () => new Array(M).fill(false));
      const queue = [...virus];

      bfs();

      function bfs() {
        while (queue.length) {
          const [y, x] = queue.shift();
          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
              if (copyMaps[ny][nx] === 0 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                copyMaps[ny][nx] = 2;
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
      let count = 0;
      copyMaps.forEach((row) =>
        row.forEach((item) => {
          if (item === 0) {
            count++;
          }
        })
      );
      maxCount = Math.max(maxCount, count);
    }
  }
}
console.log(maxCount);
