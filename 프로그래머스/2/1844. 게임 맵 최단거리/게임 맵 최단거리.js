function solution(maps) {
  /*
      아이디어
      1,1에서 시작해서 1을 따라서 최종 목적지인 (n,m)까지 이동하는 최단 거리 구하기
      이중 for문을 돌면서 현재위치가 1이고 아직방문하지 않았으면 BFS(y,x)
      
      시간복잡도
      O(V+E) = 5(N*M)=약 500000
      
      자료구조
      queue
      */
  const m = maps.length;
  const n = maps[0].length;
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));

  let count = 1;

  const my = [0, 1, 0, -1];
  const mx = [1, 0, -1, 0];

  const queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length > 0) {
    let size = queue.length;
    for (let j = 0; j < size; j++) {
      const [cy, cx] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const dy = cy + my[i];
        const dx = cx + mx[i];

        if (dy === m - 1 && dx === n - 1) return count + 1;
        if (
          dy >= 0 &&
          dy < m &&
          dx >= 0 &&
          dx < n &&
          maps[dy][dx] === 1 &&
          visited[dy][dx] === false
        ) {
          visited[dy][dx] = true;
          queue.push([dy, dx]);
        }
      }
    }
    count++;
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
