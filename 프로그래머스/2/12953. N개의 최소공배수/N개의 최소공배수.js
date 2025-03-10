function solution(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return arr.reduce((prev, cur) => lcm(prev, cur));
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
