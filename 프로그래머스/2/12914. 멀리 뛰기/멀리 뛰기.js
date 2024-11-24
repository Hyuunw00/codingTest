function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 2; // 2번째 칸까지 경우의수
  let prev2 = 1; // 1번째 칸까지 경우의수

  // 3번째 칸부터 경우의수
  for (let i = 3; i <= n; i++) {
    const current = (prev1 + prev2) % 1234567;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log(solution(4));

console.log(solution(10));
console.log(solution(2000));
