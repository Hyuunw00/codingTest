function solution(n) {
  let [n1, n2] = [0, 1];
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = (n1 + n2) % 1234567;
    n1 = n2;
    n2 = result;
  }
  return n2;
}

console.log(solution(3));
console.log(solution(5));
