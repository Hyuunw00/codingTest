function solution(k, scores) {
  const rank = [];
  return scores.map((score) => {
    rank.push(score);
    rank.sort((a, b) => b - a);
    if (rank.length > k) rank.pop();

    return rank[rank.length - 1];
  });
}
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
