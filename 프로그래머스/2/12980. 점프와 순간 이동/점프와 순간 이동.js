function solution(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }
    count++;
    n -= 1;
  }
  return count;
}

console.log(solution(6));

console.log(solution(5000));
console.log(solution(1000000000));
