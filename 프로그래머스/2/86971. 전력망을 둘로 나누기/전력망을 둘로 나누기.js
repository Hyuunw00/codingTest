function solution(n, wires) {
  /*
    1. 아이디어
    초반에 모든 송전탑은 전선을 통해 연결되어 있다.
    하나씩 끊어보면서 나눠진 전력망의 각각 송전탑 갯수의 차의 절댓값이 최소가 되는 값을 찾아야한다.
    1: [3]
    2: [3]
    3: [1,2,4]
    4: [3,5,6,]
    5: [4]
    6: [4]
    7: [,8,9]
    8: [7]
    9: [7]
    
    2. 시간복잡도
    O(N^2)
    3. 자료구조
    경로를 담을 객체(Map)
    */

  let min = Infinity;

  for (let [v1, v2] of wires) {
    const tree = new Map();

    for (let [v1, v2] of wires) {
      if (!tree.has(v1)) tree.set(v1, []);
      if (!tree.has(v2)) tree.set(v2, []);
      tree.get(v1).push(v2);
      tree.get(v2).push(v1);
    }
      
    const visited = {};
    for (let i = 1; i <= n; i++) {
      visited[i] = false;
    }
      
    visited[v1] = true;
    visited[v2] = true;
      
    tree.set(
      v1,
      tree.get(v1).filter((item) => item !== v2)
    );
    tree.set(
      v2,
      tree.get(v2).filter((item) => item !== v1)
    );

    let count = 1;
    recursion(v1);
    const restCount =n - count;
    const dif= Math.abs(restCount-count);
    min = Math.min(min, dif);

    function recursion(vertex) {
      for (let neighbor of tree.get(vertex)) {
        if (!visited[neighbor]) {
          count++;
          visited[neighbor] =true;
          recursion(neighbor);

        }
      }
    }
  }

  return min;
}
