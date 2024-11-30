function solution(number, limit, power) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j < Math.sqrt(i); j++) if (i % j === 0) count++;
    result.push(Number.isInteger(Math.sqrt(i)) ? count * 2 + 1 : count * 2);
  }
  return result
    .map((item) => (item > limit ? power : item))
    .reduce((prev, cur) => prev + cur);
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
