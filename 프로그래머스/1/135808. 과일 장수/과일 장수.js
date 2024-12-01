    



function solution(k, m, score) {
  let result = 0;
  const newScore = score.sort((a, b) => a - b);

  while (newScore.length >= m) {
    let sum = [];
    for (let i = 0; i < m; i++) sum.push(newScore.pop());
    result += Math.min(...sum) * m;
  }
  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));