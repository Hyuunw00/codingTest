function solution(n) {
  const number = new Array(n);

  number[0] = 0;
  number[1] = 0;
  for (let i = 2; i <= n; i++) {
    number[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (number[j] === 0) continue;
    for (let k = j * 2; k <= n; k += j) {
      if (number[k] !== 0) number[k] = 0;
    }
  }
  return number.filter((item) => item !== 0).length;
}

console.log(solution(10));
console.log(solution(5));
